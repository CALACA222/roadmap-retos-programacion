//Acceso a caractares especificos 
let texto = "Hola";
console.log(texto[0]);

//Sub cadenas 
let text = "Hola Mundo Javascript";
console.log(text.slice(0, 4));
console.log(text.substring(5, 10));
console.log(text.substr(11, 18));

//Longitud
let Texto = ("Saludo progrmadores");
console.log(Texto.length);

//Concatenacion 
let texto1 = "Hola";
let texto2 = "Mundo";
let texto3 = "Progrmadores";
console.log(texto1 + " " + texto2 + " " + texto3);
console.log(texto1.concat ( " ", texto2.concat(" ",texto3)));

//Repeticion
let Text = "Hola Programadores  ";
console.log(Text.repeat(4));

//Recorrido e Iteracion 
let tex = "Hola";
for (let char of tex) {
   console.log(char)
};

// Convercion a Mayusculas y Minusculas
let string = "hola programadores";
console.log(string.toLocaleUpperCase());// Mayusculas
console.log(string.toLocaleLowerCase());//Minusculas

//Remplazo
let a = "Hola Mundo"
console.log(a.replace("Mundo", "Programadores"));

//Divicion
let b = "Hola Mundo";
console.log(b.split(" "));// Se convierte en un Array 

//Union 
let palabras = ["Hola", "Mundo"];
console.log(palabras.join(" ")); // Se convierte de array a una cadena de texto 

//Interpolacion 
let c = "Programdores";
console.log(`Hola, ${c}`);

//Verificacion de Precencia 
let d = "Hola Mundo de Programadores";
console.log(d.includes( "Hola"));
console.log(d.includes( "Mundo"));
console.log(d.includes( "de"));
console.log(d.includes( "Programadores"));
console.log(d.includes( "hello"));
