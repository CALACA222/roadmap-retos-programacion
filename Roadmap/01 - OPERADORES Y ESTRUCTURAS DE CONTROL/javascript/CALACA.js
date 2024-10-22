// Ejemplos de operadores en JavaScript

// Operadores aritméticos
let suma = 5 + 3; // Suma
let resta = 10 - 7; // Resta
let multiplicacion = 4 * 3; // Multiplicación
let division = 20 / 4; // División
let modulo = 10 % 3; // Resto
console.log("Operadores aritméticos:", suma, resta, multiplicacion, division, modulo);

// Operadores de comparación
let mayorQue = 10 > 5; // Mayor que
let menorQue = 5 < 10; // Menor que
let igualA = 5 == "5"; // Igualdad (no estricta)
let estrictamenteIgualA = 5 === 5; // Igualdad estricta
let distintoDe = 5 != "5"; // Diferencia (no estricta)
let estrictamenteDistintoDe = 5 !== "5"; // Diferencia estricta
console.log("Operadores de comparación:", mayorQue, menorQue, igualA, estrictamenteIgualA, distintoDe, estrictamenteDistintoDe);

// Operadores lógicos
let yLogico = true && false; // AND
let oLogico = true || false; // OR
let negacion = !true; // Negación
console.log("Operadores lógicos:", yLogico, oLogico, negacion);

// Operadores de asignación
let x = 10;
x += 5; // x = x + 5
x -= 2; // x = x - 2
console.log("Operadores de asignación:", x);

// Operadores de identidad
let objeto1 = { nombre: "Juan" };
let objeto2 = objeto1;
let objeto3 = { nombre: "Juan" };
console.log("Operadores de identidad:", objeto1 === objeto2, objeto1 === objeto3);

// Operadores de pertenencia (in)
let arreglo = [1, 2, 3, 4];
console.log("Operadores de pertenencia:", 2 in arreglo, "nombre" in objeto1);

// Operadores de bits
let bitwiseAND = 5 & 3; // AND bit a bit
let bitwiseOR = 5 | 3; // OR bit a bit
let bitwiseXOR = 5 ^ 3; // XOR bit a bit
console.log("Operadores de bits:", bitwiseAND, bitwiseOR, bitwiseXOR);

// Estructuras de control

// Condicionales
let edad = 20;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Iterativas (bucle for)
for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

// Excepciones (try-catch)
try {
    throw new Error("Ocurrió un error.");
} catch (e) {
    console.log("Excepción capturada:", e.message);
}

// Dificultad extra: imprimir números entre 10 y 55 (incluidos) que son pares y no son el 16 ni múltiplos de 3
for (let i = 10; i <= 55; i++) {
    if (i !== 16 && i % 2 === 0 && i % 3 !== 0) {
        console.log("Número válido:", i);
    }
}
