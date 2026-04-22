import Board from "@/classes/Board";
import { v4 as uuid } from "uuid";
class Game {
    constructor(user) {
        this.id = uuid();
        this.board = new Board();
        this.host = user.id;
        this.status = "open";
        this.state = {
            type: "setup", //setup, placeTiles, characterSelect1, characterSelect2, diceRoll, eventCard, movePiece
            data: {}
        }
        this.players = [
            {id: user.id, username: user.username, host: true, schedule: Game.generateSchedule(), cards: [], effects: []}
        ];
        this.playerOrder = [];
        this.currentTurn = null;
        this.mode=0;
    }

    static generateSchedule(){
        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        for (let i=arr.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

export default Game;