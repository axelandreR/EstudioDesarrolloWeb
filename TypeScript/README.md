# TYPESCRIPT
Es un superset de JavaScript desarrollado por Microsoft. Lenguaje de programación con una serie de mejoras. Es hasta el 85% JavaScript. 

> **Importante:** TypeScript compila el código que hayamos desarrollado con nuevas funcionalidades que podrían no funcionar en todos los navegadores y lo convierte en JavaScript que sea compatible con todos los navegadores, y esto lo hace de forma automática.

Es un lenguaje interpretado en JavaScript.
Extensión: archivo.ts

## **HOLA MUNDO CON TYPESCRIPT**
---
El contenido del arcivo TS no se mostrará directamente en el navegador. Para ello se necesitará que todo lo codificado en el archivo TS se pase a un archivo JS a través de la terminal

>En la terminal se debe colocar la Ruta de la carpeta e ir hacia donde se encuentra el archivo.ts y colocar:  
> tsc archivo.ts --> Esto creará automáticamente 1 archivo JS copia del archivo.ts

Para que los cambios en ambos archivos sean automáticos en la terminal se debe ir a la ruta donde se encuentra el archivo.ts y se debe colocar lo siguiente:

> tsc -w *.ts
---
## **TIPOS DE DATOS EN TYPESCRIPT**
```typescript
// String
let cadena: string = "victorrobles.web";
console.log(cadena);

// Number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean = true;

// Any (se puede escribir cualquier tipo de dato)
let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
let lenguajes: Array<string> = ["PHP","12","CSS"]; // Forma 1
let years: number[] = [12, 13, 14]; // Forma 2

// Múltiples Tipos de datos
let cadena: string | number = "victorrobles.web";

// Crear un nuevo Tipo de Dato
type alfanumerico = string | number;
```
---
## **LET Y VAR EN TYPESCRIPT**
Diferencia entre Let y Var radica en el alcance de la variable.
Let: Variable a nivel de bloque.
Var: Variable a nivel global. 

```typescript
var numero1 = 10; // Variable global 
var numero2 = 12; // Variable global

if(numero1 == 10){
    let numero1 = 44; // Variable local (solo funcionará dentro del If)
    var numero2 = 55; // Variable global (como es de caracter global. reemplazará a todo valor que s le haya asignado a la variable con anterioridad)

    console.log(numero1, numero2); // Mostrará 44 y 55
}

console.log(numero1, numero2); // Mostrará 10 y 55
```
---
## **FUNCIONES Y TIPADO FUERTE**

Se pueden escribir funciones como en JavaScript

```typescript
    function getNumero(numero= 12){
        return "El número es: " + numero;
    }
    console.log(getNumero(55));
```

Pero en TypeScript también puedes colocar el tipo de dato de entrada y el tipo de Dato de salida.

```typescript
    function getNumero(numero: number = 12):string{
        return "El número es: " + numero;
    }
    console.log(getNumero(55));
```

> **IMPORTANTE**: Si los tipos de datos introducidos como entrada o como de salida no coinciden, la mayoría de veces el resultado se mostrará en el navegador, pero en la *Consola* lanzará un error.

---
## **CLASES**

Es un molde con el cual podemos crear una infinidad de objetos co características parecidas.

Las clases poseen *Propiedades* que son las características del objeto.

Los *Metodos* son las funciones o acciones que pueden ejecutar el objeto, estas pueden inclusive cambiar las propiedades del objeto.

```typescript
    class Camiseta{
        // Propiedades (Características del objeto)
        public color: string;
        public modelo: string;
        public marca: string;
        public talla: string;
        public precio: string;
        
        // Metodos (funciones o acciones del objeto)
        

}
```

> **IMPORTANTE:** El atributo *Public* de cada propiedad brinda acceso global a cualquier método que las invoque o las quiera alterar, de otras clases que la heradan, etc.

> El atributo **Private*: los atributos o métodos solo son accesibles desde la clase que los define.

¿Como acceder a atributos de tipo Private?
A través de metodos que apunten hacia la misma clase.
```typescript
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
```
> El atributo **Protectec*: se puede acceder al atributo desde la clase que los define y desde cualquier otra clase que la herede.

###     **Creando Objetos**
```typescript
    var camiseta = new Camiseta(); // Creación del 1er objeto

    // Asignando sus propiedades
    camiseta.color= "Rojo";
    camiseta.modelo = "Manga Larga";
    camiseta.marca = "Nike";
    camiseta.talla= "L";
    camiseta.precio= "10";

    var playera = new Camiseta(); // Creación del 2do objeto

    playera.color= "Azul";
    playera.modelo = "Manga corta";
    playera.marca = "Adidas";
    playera.talla= "L";
    playera.precio= "8";

    console.log(camiseta, playera);
```