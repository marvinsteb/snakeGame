var nuevaSerpiente;
var escala = 20;
var comida;
function setup() {
    createCanvas(600,600);
    nuevaSerpiente = new serpiente();    
    comida = createVector(random(width),random(height));
}

function draw() {
    background(51);
    nuevaSerpiente.actualizar();
    nuevaSerpiente.mostrar();

    fill(255, 0 ,100);
    rect(comida.x,comida.y,escala,escala)
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        console.log("moviendo arriba");
        nuevaSerpiente.moverSerpiente(0,-1);
    }else if(keyCode === DOWN_ARROW){
        console.log("moviendo abajo");
        nuevaSerpiente.moverSerpiente(0,1);
    }else if(keyCode === RIGHT_ARROW){
        console.log("moviendo a la derecha");
        nuevaSerpiente.moverSerpiente(1,0);
    }else if(keyCode === LEFT_ARROW){
        console.log("moviendo a la izquierda");
        nuevaSerpiente.moverSerpiente(-1,0);
    }
     
}