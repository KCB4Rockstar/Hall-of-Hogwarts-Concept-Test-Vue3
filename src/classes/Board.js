import Tile from "@/classes/Tile";

class Board {
    constructor() {
        this.tiles = this.generateTiles();
        this.corners = {
            quidditch: {
                character: "Harry Potter",
                name: " Quidditch Field",
                player: null,
                effects: [],
                contains: []
            },
            lake: {
                character: "Ginny Weasley",
                name: "Black Lake",
                player: null,
                effects: [],
                contains: []
            },
            hagrid: {
                character: "Hermione Granger",
                name: "Hagrid's Hut",
                player: null,
                effects: [],
                contains: []
            },
            forest: {
                character: "Ron Weasley",
                name: "Forbidden",
                player: null,
                effects: [],
                contains: []
            }
        }
    }

    generateTiles(){
        let types = [7, 1, 4, 7, 7, 7];
        let classes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        let classCount = 0;

        let arr = [];
        for(let i=1; i<=33; i++){
            let loc = `t${i}`

            let type = Math.floor((Math.random() * 6));
            while (types[type] === 0) {
                type = Math.floor((Math.random() * 6));
            }
            types[type]--;

            if (type === 0) {
                type = classes[classCount];
                classCount++;
            }

            let tile = new Tile(loc, type);
            arr.push(tile);
        }

        return arr;
    }
}

export default Board;