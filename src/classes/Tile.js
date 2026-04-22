class Tile {
    constructor(location, type) {
        this.location = location;
        this.type = type;
        this.rotation = Math.floor((Math.random() * 4)+1);
        this.visible = 0;

        let tempTile = {
            top: false,
            bottom: false,
            left: false,
            right: false
        };

        if(type!==1 || type!==2){ //not star and not 4 way
            if(type===0){ //classroom
                tempTile.top = true;
            }
            else if(type===3){ //3 way
                tempTile.top = true;
                tempTile.left = true;
                tempTile.bottom = true;
            }
            else if(type===4){ //2 way
                tempTile.top = true;
                tempTile.bottom = true;
            }
            else if(type===5){ //corner
                tempTile.top = true;
                tempTile.left = true;
            }
            let rotated = this.rotateTile(tempTile, this.rotation);

            this.top = rotated.top;
            this.bottom = rotated.bottom;
            this.left = rotated.left;
            this.right = rotated.right;
        }
        else{ //star or 4 way
            this.top = true;
            this.bottom = true;
            this.left = true;
            this.right = true;
        }

        this.contains = [];
        this.effects = [];
    }

    rotateTile(tile, rot, anti=false){
        if(anti){
            for(let i=0;i<rot;i++){
                let temp = tile.top;

                tile.top = tile.right;
                tile.right = tile.bottom;
                tile.bottom = tile.left;
                tile.left = temp;
            }
        }
        else{
            for(let i=0;i<rot;i++){
                let temp = tile.top;

                tile.top = tile.left;
                tile.left = tile.bottom;
                tile.bottom = tile.right;
                tile.right = temp;
            }
        }
        return tile;
    }
}

export default Tile;