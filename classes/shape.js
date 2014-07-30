function Shape(paper){
    this.paper = paper;
    this.set = this.paper.set();
}

Shape.prototype.x = function(){
    return this.set.getBBox().x;
};
  
Shape.prototype.y = function(){
    return this.set.getBBox().y;
};

Shape.prototype.width = function(){
    return this.set.getBBox().width;
};

Shape.prototype.height = function(){
    return this.set.getBBox().height;
};

Shape.prototype.x2 = function(){
    return this.x() + this.width();
};
  
Shape.prototype.y2 = function(){
    return this.y() + this.height();
};

Shape.prototype.cx = function(){
    return this.x() + this.width() / 2;
};

Shape.prototype.cy = function(){
    return this.y() + this.height() / 2;
};

Shape.prototype.translate = function(x, y){
    this.set.transform('...T' + x + ',' + y);
};

Shape.prototype.rotate = function(degrees, cx, cy){
    this.set.transform('...R' + degrees + ',' + cx + ',' + cy);
};

Shape.prototype.rotate_right = function(){
    this.rotate(90, this.cx(), this.cy());
};

Shape.prototype.rotate_left = function(){
    this.rotate(-90, this.cx(), this.cy());
};

Shape.prototype.move_to = function(x, y){
    var delta_x = x - this.x();
    var delta_y = y - this.y();
    this.translate(delta_x, delta_y);
};