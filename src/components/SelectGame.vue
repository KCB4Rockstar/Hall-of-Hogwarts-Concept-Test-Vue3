<template>
  <v-row class="d-flex flex-row justify-space-around">
    <v-col class="d-flex flex-column">
      <v-card>
        <v-card-title>Create a Game</v-card-title>
        <v-card-text class="d-flex flex-column">
          <v-text-field v-model="username" label="Username" />
          <span class="d-flex flex-row justify-space-around">
          <v-btn color="warning" v-if="isDifferent && !activeGame" @click="$emit('update-name', username)">Update Name</v-btn>
          <v-btn color="primary" :disabled="!username || (activeGame && activeGame.length>0)" @click="$emit('create-game')">{{activeGame?'Already In a Game':'Create Game'}}</v-btn>
        </span>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="d-flex flex-column">
      <v-card>
        <v-card-title>Join a Game</v-card-title>
        <v-card-text class="d-flex flex-column">
          <v-text-field v-model="gameId" label="Join Code..." append-icon="mdi-content-paste" @click:append="pasteText"/>
          <v-btn color="success" :disabled="!gameId" @click="$emit('join-game', gameId)">Join</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['firebaseUser', 'activeGame'],
  data: () => ({
    gameId: "",
    username: ""
  }),
  computed: {
    isDifferent(){
      return this.firebaseUser.username!==this.username;
    }
  },
  mounted(){
    this.username = this.firebaseUser.username;
  },
  methods: {
    async pasteText() {
      this.gameId = await navigator.clipboard.readText();
    },
  }
};
</script>