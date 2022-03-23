// Clase (molde del objeto)

class Camiseta{
    // Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: string;
    
    // Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta();
camiseta.setColor("Rojo");

var playera = new Camiseta();
playera.setColor("Azul");

console.log(camiseta, playera);