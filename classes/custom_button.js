function CustomButton(paper, text){
    this.parent.constructor.call(this, paper);
    this.text = text;
    this.draw();
}

CustomButton.prototype = Object.create(Shape.prototype);
CustomButton.prototype.constructor = CustomButton;
CustomButton.prototype.parent = Shape.prototype;

CustomButton.prototype.draw = function(){
    var b_width = 100;
    var b_height = 40;
    var button = this.paper.rect(0, 0, b_width, b_height, 5);
    button.attr({fill: "#bbbbbb", 'fill-opacity': 1, stroke: 'black', 'stroke-width': 1});
    
    var text_shape = new CustomText(this.paper, this.text);
    text_shape.move_to((b_width - text_shape.width())/2, (b_height - text_shape.height())/2);
    this.set.push(button, text_shape.set);
};