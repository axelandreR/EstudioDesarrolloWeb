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

console.log(cadena, numero, verdadero_falso,cualquiera, lenguajes, years);