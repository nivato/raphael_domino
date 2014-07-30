function start(){
    var paper = Raphael(0, 0, 400, 400);
    var border = paper.rect(0, 0, 400, 400);
    border.attr({fill: "#fff", 'fill-opacity': 0, stroke: 'black', 'stroke-width': 2});
    var piece = new Piece(paper);
    piece.move_to(130, 50);
    var left_button = new CustomButton(paper, 'Rotate Left');
    left_button.move_to(40, 350);
    var generate_new_button = new CustomButton(paper, 'Generate New');
    generate_new_button.move_to(left_button.x2() + 10, 350);
    var right_button = new CustomButton(paper, 'Rotate Right');
    right_button.move_to(generate_new_button.x2() + 10, 350);
}

window.onload = start;
