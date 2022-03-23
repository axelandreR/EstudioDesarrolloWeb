// Crear tipo de dato
type alfanumerico = string | number; //Se pueden combinar tipos de datos 
// String
let cadena: string = "victorrobles.web";
console.log(cadena);

// Number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
let lenguajes: Array<string> = ["PHP","12","CSS"];
let years: number[] = [12, 13, 14];

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso,cualquiera, lenguajes, years);