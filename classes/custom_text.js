function CustomText(paper, text){
    this.parent.constructor.call(this, paper);
    this.text = text;
    this.draw();
}

CustomText.prototype = Object.create(Shape.prototype);
CustomText.prototype.constructor = CustomText;
CustomText.prototype.parent = Shape.prototype;

CustomText.prototype.draw = function(){
    var text_shape = this.paper.text(0, 0, this.text);
    text_shape.attr({fill: '#222222', "font-family": "arial, serif", "font-weight": 700, "font-size": 14, stroke: "none", "text-anchor": "start"});
    this.set.push(text_shape);
};