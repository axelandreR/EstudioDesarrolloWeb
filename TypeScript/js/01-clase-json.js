let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        // bicicleta = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    }
}

bicicleta.cambiaColor("Azul");