# EstudioDesarrolloWeb
# OBJETOS JSON

POO: Paradigma de programación que nos permite estructurar
mejor nuestro código dividiendo todo en:
* clases
* objetos
* entidades

TypeScript: Super Set o super conjunto de herramientas desarrollado por Windows
* 85% Javascript normal
* Tiene un tipado fuerte: indica si una variable es string, booleano, number.
* Extensión archivo.ts

---
<!-- Simular una clase de JavaScript usando JSON -->
## **JSON**
> ¿Qué es una clase?
> Objeto que posee varias características y que sirve como molde para crear varias entidades de mismo tipo.

```javascript
// EJEMPLO DE UNA CLASE
let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km'
}
```

Se pueden cambiar las propiedades de una clase con una *Function*

``` javascript
let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        // bicicleta = nuevo_color;
        this.color = nuevo_color; // this: hace referencia al mismo objeto
        console.log(this);
    }
}

bicicleta.cambiaColor("Azul"); // Invocar el método
```