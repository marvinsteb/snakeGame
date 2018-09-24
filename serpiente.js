
function serpiente(){
    
    this.posicionx = 0;
    this.posiciony = 0;
    this.moverX = 1;
    this.moverY = 0;
    this.tamanio = 0;
    this.cola = [];
    this.bloquearMovimiento = 'izquierda';

    this.muere = function () {
        for (var i = 0; i < this.cola.length; i++) {
            var posicion = this.cola[i];
            var diferencia = dist(this.posicionx,this.posiciony,posicion.x,posicion.y);
            if(diferencia < 1){
                alert("estas muerto");
                this.tamanio = 0;
                this.cola = []; 
                return true;
            }else {
                return false;
            }
        }
    }

    this.moverSerpiente = function(x,y){

        if(x === 0 && y === -1 && this.bloquearMovimiento !== 'arriba'){
           this.moverX = x;
           this.moverY = y;
           this.bloquearMovimiento = 'abajo'; 
        }else if(x === 0 && y === 1 && this.bloquearMovimiento !== 'abajo' ){
            this.moverX = x;
            this.moverY = y;
            this.bloquearMovimiento = 'arriba';
        }else if (x === 1 && y === 0 && this.bloquearMovimiento !== 'derecha'){
            this.moverX = x;
            this.moverY = y;
            this.bloquearMovimiento = 'izquierda';
        }else if (x === -1 && y === 0 && this.bloquearMovimiento !== 'izquierda'){
            this.moverX = x;
            this.moverY = y;
            this.bloquearMovimiento = 'derecha';
        }
    }

    this.comer = function(posicion){
        var d = dist(this.posicionx, this.posiciony, posicion.x ,posicion.y);
        if(d < 1 ){
            this.tamanio++;     
            return true;
        }else {
            return false;
        }
    }

    this.actualizar = function(){

        if(this.tamanio === this.cola.length){

            for (var i = 0; i < this.cola.length - 1 ; i++) {
                this.cola[i] = this.cola[i + 1];
            }
        }
        this.cola[this.tamanio - 1] = createVector(this.posicionx, this.posiciony);

        this.posicionx = this.posicionx + this.moverX * escala;
        this.posiciony = this.posiciony + this.moverY * escala;

        this.posicionx = constrain(this.posicionx,0,width-escala);
        this.posiciony = constrain(this.posiciony,0,height-escala);
    }

    this.mostrar = function(){
        fill(255);
        for (var i = 0; i < this.cola.length  ; i++) {
            rect(this.cola[i].x,this.cola[i].y,escala,escala);
        }
        rect(this.posicionx,this.posiciony,escala,escala);
    }
}
