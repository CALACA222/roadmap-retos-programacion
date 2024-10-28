/* 1 FUNCION BASICA */ 
function  holaMundo() {
    return 'hola, mundo';
};
console.log(holaMundo());

/* 2 FUNCION CON UN PARAMETRO*/
function saludo(name) {
    let saludo = 'hola que tal, ';
    return saludo + name;
};
console.log(saludo('Bruno'));

/* 3 FUNCIONES CON VARIOS PARAMETROS*/ 
function suma(a, b) {
    return a + b;
};
console.log(suma(10, 3));

/* 4 FUNCIONES CON RETORNO */
function resta(a, b) {
    return a - b;
};
console.log(resta(234, 456));

/* 5 CREA FUNCIONES DENTRO DE FUNCIONES */
function funcionExterna () {
    function funcionInterna () {
        console.log('soy una funcion interna');
    };
    funcionInterna();
};
funcionExterna();

/* 6  USAR FUNCIONES YA CREADAS DEL LENGUAJE */
function numeroAleatorio() {
    const numeroAle = Math.floor(Math.random() * 100);
    console.log('Numero Aleatorio:' + numeroAle );
}
numeroAleatorio();

/* 7 DIFRENCIAR VARIABLES LOCALES Y GLOBALES*/
let variableGlobal = "Soy una variable global"
function mostrarVariable() {
    let variableLocal = "Soy una variable local";
    console.log(variableGlobal);
    console.log(variableLocal);
} ;
mostrarVariable();



function imprimirNumeros(param1, param2) {
    let contador = 0;

    for (let numero = 1; numero <= 100; numero++) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log(param1 + param2);

        } else if (numero % 3 === 0) {
            console.log(param1);

        } else if (numero % 5 === 0) {
            console.log(param2); 
        } else {
            console.log(numero); 
            contador++;
        }
    }

    return contador;
const resultado = imprimirNumeros("Fizz", "Buzz");
console.log("Números impresos:"  &{resultado});
 };
