<template>
  <v-row class="d-flex flex-row" style="user-select: none;">
    <v-col>
      <v-card>
        <v-card-title>
          <v-text-field readonly :value="game.id" label="Click Here for Lobby Code" append-icon="mdi-content-copy" @click:append="copyText(game.id)"/>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col xs="12" sm="12" md="12" lg="6">
              <div class="d-flex flex-column justify-space-between">
                <span>
                  <h2>The Board</h2>
                  <span class="d-flex flex-row">
                    <div>
                      <span class="layer">
                        <span class="player">
                          <span class="playerName">Player Name</span>
                        </span>
                        <span class="tileset">
                          <span class="tiles">
                            <span @click="openTileDialog('t1')" id="t1" class="tile">
                              <img draggable="false" :src="tiles['t1']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t2')" id="t2" class="tile">
                              <img draggable="false" :src="tiles['t2']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t3')" id="t3" class="tile">
                              <img draggable="false" :src="tiles['t3']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                          <span class="tiles">
                            <span @click="openTileDialog('t4')" id="t4" class="tile">
                              <img draggable="false" :src="tiles['t4']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t5')" id="t5" class="tile">
                              <img draggable="false" :src="tiles['t5']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t6')" id="t6" class="tile">
                              <img draggable="false" :src="tiles['t6']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                        </span>
                        <span class="player">
                          <span class="playerName">Player Name</span>
                        </span>
                      </span>
                      <span id="layer2" class="layer">
                        <span class="tileset">
                          <span class="tiles">
                            <span @click="openTileDialog('t7')" id="t7" class="tile">
                              <img draggable="false" :src="tiles['t7']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t8')" id="t8" class="tile">
                              <img draggable="false" :src="tiles['t8']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t9')" id="t9" class="tile">
                              <img draggable="false" :src="tiles['t9']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t10')" id="t10" class="tile">
                              <img draggable="false" :src="tiles['t10']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t11')" id="t11" class="tile">
                              <img draggable="false" :src="tiles['t11']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t12')" id="t12" class="tile">
                              <img draggable="false" :src="tiles['t12']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t13')" id="t13" class="tile">
                              <img draggable="false" :src="tiles['t13']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                          <span class="tiles">
                            <span @click="openTileDialog('t14')" id="t14" class="tile">
                              <img draggable="false" :src="tiles['t14']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t15')" id="t15" class="tile">
                              <img draggable="false" :src="tiles['t15']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t16')" id="t16" class="tile">
                              <img draggable="false" :src="tiles['t16']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t17')" id="t17" class="tile">
                              <img draggable="false" :src="tiles['t17']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t18')" id="t18" class="tile">
                              <img draggable="false" :src="tiles['t18']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t19')" id="t19" class="tile">
                              <img draggable="false" :src="tiles['t19']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t20')" id="t20" class="tile">
                              <img draggable="false" :src="tiles['t20']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                          <span class="tiles">
                            <span @click="openTileDialog('t21')" id="t21" class="tile">
                              <img draggable="false" :src="tiles['t21']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t22')" id="t22" class="tile">
                              <img draggable="false" :src="tiles['t22']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t23')" id="t23" class="tile">
                              <img draggable="false" :src="tiles['t23']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t24')" id="t24" class="tile">
                              <img draggable="false" :src="tiles['t24']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t25')" id="t25" class="tile">
                              <img draggable="false" :src="tiles['t25']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t26')" id="t26" class="tile">
                              <img draggable="false" :src="tiles['t26']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t27')" id="t27" class="tile">
                              <img draggable="false" :src="tiles['t27']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                        </span>
                      </span>
                      <span class="layer">
                        <span class="player">
                          <span class="playerName">Player Name</span>
                        </span>
                        <span class="tileset">
                          <span class="tiles">
                            <span @click="openTileDialog('t28')" id="t28" class="tile">
                              <img draggable="false" :src="tiles['t28']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t29')" id="t29" class="tile">
                              <img draggable="false" :src="tiles['t29']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t30')" id="t30" class="tile">
                              <img draggable="false" :src="tiles['t30']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                          <span class="tiles">
                            <span @click="openTileDialog('t31')" id="t31" class="tile">
                              <img draggable="false" :src="tiles['t31']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t32')" id="t32" class="tile">
                              <img draggable="false" :src="tiles['t32']" alt="tileImg" class="tileImg">
                            </span>
                            <span @click="openTileDialog('t33')" id="t33" class="tile">
                              <img draggable="false" :src="tiles['t33']" alt="tileImg" class="tileImg">
                            </span>
                          </span>
                        </span>
                        <span class="player">
                          <span class="playerName">Player Name</span>
                        </span>
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </v-col>
            <v-col xs="12" sm="12" md="12" lg="6">
              <div class="d-flex flex-column justify-space-between">
                <span>
                  <h2>Player Inventory</h2>
                  <span class="d-flex flex-row">
                    <span>
                    </span>
                  </span>
                </span>
              </div>
            </v-col>
            <v-col xs="12" sm="12" md="12" lg="9">
              <div class="d-flex flex-column justify-space-between">
                <span>
                  <h2>Players</h2>
                  <v-row class="">
                    <v-col cols="6" v-for="(player, i) in this.game.players" :key="i">
                      <span v-if="player.schedule" class="d-flex flex-row">
                        <span class="d-flex flex-column bg-blue pa-2">
                          <span class="d-flex flex-row">
                            <span class="scheduleTile"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[0])"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[1])"></span>
                          </span>
                          <span class="d-flex flex-column">
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[2])"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[3])"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[4])"></span>
                          </span>
                          <span class="d-flex flex-row">
                            <span class="scheduleTile"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[5])"></span>
                            <span class="scheduleTile"><img :src="getImgUrl(player.schedule[6])"></span>
                          </span>
                        </span>
                        <span v-if="players[player.id]" class="bg-orange d-flex flex-column">
                          {{players[player.id]}}
                          <h3>{{players[player.id].username}}</h3>
                          <span class="schedulePortrait">
                            <img :src="getImgUrl('default')">
                          </span>
                        </span>
                      </span>
                    </v-col>
                  </v-row>
                </span>
              </div>
            </v-col>
            <v-col xs="12" sm="12" md="12" lg="3">
              <div class="d-flex flex-column justify-space-between">
                <span v-if="this.game.host===this.user.id">
                  <h2>Host Options</h2>
                  <span class="d-flex flex-column">
                    <v-btn color="success" @click="startGame" :disabled="this.game.players.length<2 || this.game.players.length>4 || this.game.status!=='open'">Start Game</v-btn>
                  </span>
                </span>
                <span>
                  <h2>Player List</h2>
                  <span class="d-flex flex-row mt-1" v-for="(player, i) in game.players" :key="i">
                    <span style="font-size: 16px;">{{player.username}}</span>
                    <v-icon v-if="player.host">mdi-star</v-icon>
                    <v-btn v-if="this.game.host===this.user.id" class="ml-2" color="error" size="xsmall" @click="kickPlayer(player)"><v-icon>mdi-close</v-icon></v-btn>
                  </span>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-dialog v-model="tileDialog.visible">
        <v-card width="300" height="300" v-if="tileDialog.tile">
          <v-card-title>Adjust Tile</v-card-title>
          <v-card-text class="d-flex flex-column justify-space-around">
            <span v-if="!tileDialog.tile.visible" class="d-flex flex-row justify-space-around">
              <v-btn @click="showTile" color="info">Reveal</v-btn>
            </span>
            <span v-if="tileDialog.tile.visible" class="d-flex flex-row justify-space-around">
              <v-btn @click="rotateTile(true)" color="warning"><v-icon>mdi-rotate-left</v-icon></v-btn>
              <v-btn @click="rotateTile()" color="secondary"><v-icon>mdi-rotate-right</v-icon></v-btn>
            </span>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="closeTileDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "../firebase";

export default {
  props: ['gameId', 'user'],
  data: () => ({
    game: {
      id: null,
      board: {
        tiles: []
      },
      host: null,
      status: null,
      players: [],
      currentTurn: null,
      mode: 0
    },
    tiles: {},
    players: {},
    tileDialog: {
      visible: false,
      tile: null
    }
  }),
  async created(){
    this.resetTileImages();

    let snapshot = await firebase.database().ref(`/users/`).once('value');
    let players = snapshot.val();
    console.log(players, "players");

    snapshot = await firebase.database().ref(`/games/${this.gameId}/players`).once('value');
    let data = snapshot.val();
    console.log(data, "data");
    if(!data) return;

    for(let p of data){
      let found = players.find(x => x.id===p.id);
      if(found){
        this.players[found.id] = found;
      }
    }
  },
  async mounted() {
    try{
      if(!this.gameId){
        this.game = {
          id: null,
          board: {
            tiles: []
          },
          host: null,
          status: null,
          players: [],
          currentPlayer: null,
          mode: 0
        };
        return;
      }

      firebase.database()
          .ref(`/games/${this.gameId}`)
          .on("value", snapshot => {
            let gameLoaded = snapshot.val() || {
              id: null,
              board: {
                tiles: []
              },
              host: null,
              status: null,
              players: [],
              currentPlayer: null,
              mode: 0
            };

            this.game = gameLoaded;

            for(let tile of this.game.board.tiles){
              let el = document.getElementById(tile.location);
              this.tiles[tile.location] = tile.visible?this.getImgUrl(tile.type):this.getImgUrl("down")
              let deg = tile.rotation*90;
              el.childNodes[0].style.transform = "rotate("+deg+"deg)";
            }
          });
    }
    catch (e) {
      console.error(e);
      throw e;
    }
  },
  async updated() {
    try{
      if(!this.gameId){
        this.game = {
          id: null,
          board: {
            tiles: []
          },
          host: null,
          status: null,
          players: [],
          currentPlayer: null,
          mode: 0
        };
        this.resetTileImages();

        return;
      }

      firebase.database()
          .ref(`/games/${this.gameId}`)
          .on("value", snapshot => {
            let gameLoaded = snapshot.val() || {};
            this.game = gameLoaded;

            //check and kick players
            let player = this.game.players.find(x => x.id===this.user.id);
            if(!player || player.status==="kicked"){
              this.$emit("leave-game")
            }

            //update tiles
            for(let tile of this.game.board.tiles){
              let el = document.getElementById(tile.location);
              this.tiles[tile.location] = tile.visible?this.getImgUrl(tile.type):this.getImgUrl("down")
              let deg = tile.rotation*90;
              el.childNodes[0].style.transform = "rotate("+deg+"deg)";
            }

            ////trigger screen events
            //animate tiles
            if(this.game.state.type==="placeTiles"){
              console.log("animating tiles")
            }

            //character selection dice roll
            if(this.game.state.type==="characterSelect1"){
              console.log("showing character order")
            }

            //character selection
            if(this.game.state.type==="characterSelect2"){
              console.log("selecting character")
            }

            //dice roll
            if(this.game.state.type==="diceRoll"){
              console.log("rolling dice")
            }

            //event card
            if(this.game.state.type==="eventCard"){
              console.log("showing event")
            }

            //animate player piece
            if(this.game.state.type==="movePiece"){
              console.log("moving piece")
            }
          });
    }
    catch (e) {
      console.error(e);
      throw e;
    }
  },
  methods: {
    diceRoll(){
      return Math.floor((Math.random() * 4)+1);
    },
    async startGame(){
      this.game.status = "started";

      let playerOrder = [];
      for(let player of this.game.players){
        playerOrder.push({id: player.id, diceValue: this.diceRoll()})
      }
      let diceDone = false;
      while(!diceDone){
        playerOrder = playerOrder.sort((a, b) => b.diceValue-a.diceValue);
        if(playerOrder.findIndex(x => x.id!==playerOrder[0].id && x.diceValue===playerOrder[0].diceValue)<0) diceDone=true;
      }

      this.game.state = {
        type: "place",
        data: {}
      }


      await firebase.database().ref(`/games/${this.gameId}`).set(this.game);
    },
    async copyText(text) {
      await navigator.clipboard.writeText(text);
    },
    resetTileImages(){
      for(let i=1;i<=33;i++){
        this.tiles[`t${i}`] = this.getImgUrl("default");
      }
    },
    getImgUrl(img) {
      let image = require.context('../assets/images/general/', false, /\.png$/)
      return image('./' + img + ".png")
    },
    closeTileDialog(){
      this.tileDialog = {
        visible: false,
        tile: null
      };
    },
    openTileDialog(t){
      if(this.game.status!=="started") return;
      // if(this.game.currentPlayer!==firebase.auth().currentUser.uid) return;

      this.tileDialog.tile = this.game.board.tiles.find(x => x.location===t);
      this.tileDialog.visible = true;
    },
    async showTile(){
      let tile = this.tileDialog.tile;
      tile.visible = true;

      await firebase.database().ref(`/games/${this.gameId}/board`).set(this.game.board);

      this.closeTileDialog();
    },
    async rotateTile(anti=false){
      let tile = this.tileDialog.tile;

      if(anti){
        tile.rotation--;
        if(tile.rotation<=0){
          tile.rotation = 4;
        }
        let temp = tile.top;
        tile.top = tile.right;
        tile.right = tile.bottom;
        tile.bottom = tile.left;
        tile.left = temp;
      }
      else{
        tile.rotation++;
        if(tile.rotation>=5){
          tile.rotation = 0;
        }
        let temp = tile.top;
        tile.top = tile.left;
        tile.left = tile.bottom;
        tile.bottom = tile.right;
        tile.right = temp;
      }

      await firebase.database().ref(`/games/${this.gameId}/board`).set(this.game.board);

      this.closeTileDialog();
    },
    async kickPlayer(player){
      let snapshot = await firebase.database().ref(`/games/${this.gameId}/players`).once('value');
      let players = snapshot.val();

      let pl = players.findIndex(x => x.id===player.id);
      if(!pl) throw "Player not in game. Can't be kicked."

      await firebase.database().ref(`/games/${this.gameId}/players/${pl}/status`).set("kicked");
    }
  }
};
</script>

<style>
.btnLabel:hover, .tile:hover, .cards:hover{
  cursor: pointer;
  background-color: red;
  user-select: none;
}

/*board screen*/

.layer{
  display: inline-flex;
  width: 100%;
  height: 28%;
}

#layer2{
  width: 100%;
  height: 42.5%;
}

.tileset{
  width: 270px;
  display: block;
}

.tiles{
  display: inline-flex;
  user-select: none;
}

.tile{
  width: 80px;
  height: 80px;
  margin: 5px;
}

.tile .tileImg{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.tileImg:hover{
  border: 3px solid red;
}

.player{
  width: 170px;
  height: 170px;
  background-color: green;
  margin: 5px;
  color: white;
  position: relative;
}

.player .playerName{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.scheduleTile{
  width: 40px;
  height: 40px;
  margin: 2px;
}

.scheduleTile img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.schedulePortrait{
  height: 240px;
  width: 180px;
  padding: 10px;
}

.schedulePortrait img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

</style>