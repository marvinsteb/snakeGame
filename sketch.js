var nuevaSerpiente;
var escala = 20;
var comida;
function setup() {
    iniciarJuego();
}
function iniciarJuego(){
    createCanvas(600,600);
    nuevaSerpiente = new serpiente();    
    frameRate(10);
    colocarComida();
}
function colocarComida(){
    var columna = floor(width/escala);
    var fila = floor(height/escala);
    comida = createVector(floor(random(columna)),floor(random(fila)));
    comida.mult(escala);
}

function draw() {
    background(51);
    nuevaSerpiente.actualizar();
    nuevaSerpiente.mostrar();
    if(nuevaSerpiente.muere()){
        iniciarJuego();
    }
    if(nuevaSerpiente.comer(comida)){
        colocarComida();
    }
    

    fill(255, 0 ,100);
    rect(comida.x,comida.y,escala,escala);

    
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        nuevaSerpiente.moverSerpiente(0,-1);     
    }else if(keyCode === DOWN_ARROW){
        nuevaSerpiente.moverSerpiente(0,1);
    }else if(keyCode === RIGHT_ARROW){
        nuevaSerpiente.moverSerpiente(1,0);
    }else if(keyCode === LEFT_ARROW){
        nuevaSerpiente.moverSerpiente(-1,0);
    }
     
}