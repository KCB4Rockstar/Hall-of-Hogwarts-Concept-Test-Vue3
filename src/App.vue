<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col class="d-flex flex-row align-center">
            <h1>Harry Potter - Hall of Hogwarts</h1>
            <v-btn @click="toggleTheme" size="small" class="ml-2"><v-icon>mdi-theme-light-dark</v-icon></v-btn>
            <v-btn color="error" @click="leaveGame" v-if="user.signedIn && activeGame" size="small" class="ml-2"><v-icon>mdi-logout</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="">
              <LoginPage v-if="!user.signedIn" v-on:login="login" />
              <SelectGame v-if="user.signedIn" v-on:create-game="createGame" v-on:update-name="updateName" :activeGame="activeGame" :firebaseUser="user" v-on:join-game="joinGame" />
            </span>
            <span class="d-flex flex-column mt-5">
              <GameBoard :user="user" :gameId="activeGame" v-on:leave-game="leaveGame"/>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useTheme } from 'vuetify'

import firebase from "./firebase";
import GameBoard from "./components/GameBoard";
import LoginPage from "./components/LoginPage";
import SelectGame from "./components/SelectGame";
import Game from "@/classes/Game";

export default {
  setup () {
    const theme = useTheme()
    return {theme, toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'}
  },
  name: "App",
  components: { GameBoard, LoginPage, SelectGame },
  data: () => ({
    user: {},
    activeGame: null,

    storageAvailable: false,
    storage: null
  }),
  async created() {
    try{
      if (this.checkStorage('localStorage')) {
        this.storageAvailable = true;
        console.log("Storage is available.");
        this.storage = localStorage;

        if (!firebase.auth().currentUser) {
          await this.signIn();
        }

        let snapshot = await firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value');
        let retrieved = snapshot.val();
        this.user = {...retrieved};

        let cachedGame = this.storage.getItem("gameId");
        if(cachedGame){
          this.activeGame = cachedGame;
          console.log("Existing game found.")
        }

      } else {
        this.storageAvailable = false;
        console.log("No storage available.");
      }
    }
    catch (e) {
      console.error(e)
    }
  },
  async updated() {
    try{
      if (this.checkStorage('localStorage')) {
        this.storageAvailable = true;
        console.log("Storage is available.");
        this.storage = localStorage;

        if (!firebase.auth().currentUser) {
          await this.signIn();
        }

        let snapshot = await firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value');
        let retrieved = snapshot.val();
        this.user = {...retrieved};

        let cachedGame = this.storage.getItem("gameId");
        if(cachedGame){
          console.log(cachedGame);
          this.activeGame = cachedGame;
          console.log("Existing game found.")
        }

      } else {
        this.storageAvailable = false;
        console.log("No storage available.");
      }
    }
    catch (e) {
      console.error(e)
    }
  },
  methods: {
    async login(name) {
      try{
        name = name.trim();
        let user = firebase.auth().currentUser;
        if(!user) throw "Cannot login. No Firebase Access";

        let userObj = {
          id: user.uid,
          username: name,
          signedIn: true
        }

        await firebase.database()
            .ref(`/users/${user.uid}`)
            .set(userObj);

        this.user = userObj;
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    async updateName(name) {
      try{
        name = name.trim();
        let user = firebase.auth().currentUser;
        if(!user) throw "Cannot update. No Firebase Access";

        let snapshot = await firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value');
        let retrieved = snapshot.val();
        retrieved.username = name;
        this.user = retrieved;

        await firebase.database()
            .ref(`/users/${user.uid}`)
            .set(this.user);
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    async leaveGame() {
      try{
        let snapshot = await firebase.database().ref(`/games/${this.activeGame}`).once('value');
        let data = snapshot.val();

        if(data){
          let foundPlayer = data.players.findIndex(x => x.id===this.user.id);
          if(foundPlayer>=0){
            if(data.players[foundPlayer].host){
              await firebase.database().ref(`/games/${this.activeGame}/status`).set("closed");
            }
            else{
              await firebase.database().ref(`/games/${this.activeGame}/players/${foundPlayer}`).remove();
            }
          }
          await firebase.database().ref(`/games/${this.activeGame}`).off();
        }

        this.storage.removeItem("gameId");
        this.activeGame = null;
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    async createGame() {
      try{
        const newGame = new Game(this.user);
        await firebase.database()
            .ref(`/games/${newGame.id}`)
            .set(newGame);
        this.activeGame = newGame.id;
        this.storage.setItem("gameId", newGame.id);
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    async joinGame(id) {
      try{
        id = id.trim();
        let snapshot = await firebase.database().ref(`/games/${id}`).once('value');
        let data = snapshot.val();

        if(data && data.status==="closed") throw "Lobby is closed."
        if(data && data.status==="full") throw "Lobby is full."
        if(data && data.status==="started") throw "Game has already started."

        if(data.players.find(x => x.id===this.user.id)) throw "Player is already in this session."

        if(data.players.length<4){
          data.players.push({id: this.user.id, username: this.user.username, host: false, schedule: Game.generateSchedule(), cards: [], effects: []})
        }

        await firebase.database()
            .ref(`/games/${id}/players`)
            .set(data.players);

        if(data.players.length===4){
          await firebase.database()
              .ref(`/games/${id}/status`)
              .set("full");
        }

        this.activeGame = id;
        this.storage.setItem("gameId", id);
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    checkStorage(type){
      try {
        let storage = window[type];
        let x = '__storage_test__';

        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      }
      catch(e) {
        return false;
      }
    },
    async signIn(){
      try{
        if(firebase.auth().currentUser)
          await this.signOut();

        await firebase.auth().signInAnonymously()
        console.log("Signed in successfully.")
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    async signOut(){
      try{
        let delUser = firebase.auth().currentUser;

        await firebase.auth().signOut();
        console.log("Signed out successfully.")

        await delUser.delete();
      }
      catch (e) {
        console.error(e);
        throw e;
      }
    },
    //TODO: load game, or do nothing

    isValidMove(tile){
      console.log(tile);
    }
  }
};
</script>