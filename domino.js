var PAPER;
var PIECE;
var ROTATION = 0;

function generate_new_piece(){
	if (PIECE != undefined){
		PIECE.remove();
	}
	PIECE = new Piece(PAPER);
    PIECE.move_to(130, 50);
    for (var i=0; i < ROTATION; i++){
        PIECE.rotate_right();
    }
}

function rotate_left(){
	PIECE.animate_rotation_left();
	ROTATION -= 1;
	if (ROTATION < 0){
	    ROTATION = 3;
	}
}

function rotate_right(){
	PIECE.animate_rotation_right();
	ROTATION += 1;
	if (ROTATION > 3){
        ROTATION = 0;
    }
}

function start(){
    PAPER = Raphael(0, 0, 400, 400);
    generate_new_piece();
    var left_button = new CustomButton(PAPER, 'Rotate Left');
    left_button.move_to(40, 350);
    left_button.click(rotate_left);
    var generate_new_button = new CustomButton(PAPER, 'Generate New');
    generate_new_button.move_to(left_button.x2() + 10, 350);
    generate_new_button.click(generate_new_piece);
    var right_button = new CustomButton(PAPER, 'Rotate Right');
    right_button.move_to(generate_new_button.x2() + 10, 350);
    right_button.click(rotate_right);
}

window.onload = start;
