function Tile(paper, number){
    this.parent.constructor.call(this, paper);
    this.number = number;
    this.draw();
}

Tile.prototype = Object.create(Shape.prototype);
Tile.prototype.constructor = Tile;
Tile.prototype.parent = Shape.prototype;

Tile.prototype.draw = function(){
    var tile = this.paper.rect(0, 0, 100, 100, 10);
    tile.attr({fill: "135-#999999-#ffffff", 'fill-opacity': 1, stroke: '#222222', 'stroke-width': 2});
    this.set.push(tile);
    var tile_number = new TileNumber(this.paper, this.number);
    this.set.push(tile_number.set);
};
