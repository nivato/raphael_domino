function TileNumber(paper, number){
    this.parent.constructor.call(this, paper);
    this.number = number;
    this.dot_positions = {
        0: [],
        1: [[50, 50]],
        2: [[30, 70], [70, 30]],
        3: [[30, 70], [50, 50], [70, 30]],
        4: [[30, 30], [70, 30], [30, 70], [70, 70]],
        5: [[30, 30], [70, 30], [50, 50], [30, 70], [70, 70]],
        6: [[30, 25], [70, 25], [30, 50], [70, 50], [30, 75], [70, 75]]
    };
    this.draw();
}

TileNumber.prototype = Object.create(Shape.prototype);
TileNumber.prototype.constructor = TileNumber;
TileNumber.prototype.parent = Shape.prototype;

TileNumber.prototype.draw = function(){
    var positions = this.dot_positions[this.number];
    for (var i = 0; i< positions.length; i++) {
        var xy = positions[i];
        var dot = this.paper.circle(xy[0], xy[1], 10);
        dot.attr({fill: '135-#ffffff-#000000', 'fill-opacity': 1, stroke: '#666666', 'stroke-width': 1});
        this.set.push(dot);
    }
};
