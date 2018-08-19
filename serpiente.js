
function serpiente(){
    this.posicionx = 0;
    this.posiciony = 0;
    this.moverX = 1;
    this.moverY = 0;

    this.moverSerpiente = function(x,y){
        console.log("moviendo en en x " + x + " en y " + y )
        this.moverX = x;
        this.moverY = y;
    }

    this.actualizar = function(){
        this.posicionx = this.posicionx + this.moverX * escala;
        this.posiciony = this.posiciony + this.moverY * escala;

        this.posicionx = constrain(this.posicionx,0,width-escala);
        this.posiciony = constrain(this.posiciony,0,height-escala);
    }
    this.mostrar = function(){
        fill(255);
        rect(this.posicionx,this.posiciony,escala,escala);
    }

}
