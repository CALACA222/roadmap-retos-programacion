//Array 
let animes = ["Onepiece", "Naruto", "BokuNoHero"];
console.log(animes);

animes.push("DragonBall");// agrega dragonball al final
animes.unshift("TokyoGoul");// agrega tokyogoul al principio
console.log(animes);

animes.pop(); // pop elimina aqui a dragonball
animes.shift(); // shift elimina a tokyogoul
console.log(animes);

animes.sort();// ordena la lista de manera alfabetica
console.log(animes);

animes.reverse(); // ordena alreves la lista 
console.log(animes);



//Objetos
let protagonistaOP = {nombre:"Luffy", edad:"15", ciudad:"East Blue"};
console.log(protagonistaOP);

protagonistaOP.profecion = "Pirata";
console.log(protagonistaOP); // agrgamos un nuevo par clave-valor la profecion de Luffy

delete protagonistaOP.ciudad;
console.log(protagonistaOP);// eliminar una clave y su valor asociado que en este caso seria su ciudad

protagonistaOP.edad = 17;
console.log(protagonistaOP);// asigna un nuevo valor a una clave exsitente, que en este caso seria cambiarle la edad a luffy 

let protaOrdenado = Object.keys(protagonistaOP).sort(); // se ordena el objeto, y para poder hacer esto primero tenemos que convertir el objec en un array.
 let protaOrden = {};
 protaOrdenado.forEach(clave => {
    protaOrden[clave] = protagonistaOP[clave];
 });
 console.log(protaOrden);



//Sets
let protagonistas = new Set(["Luffy", "Naruto", "Goku", "Deku"]);
console.log(protagonistas);

protagonistas.add("Kaneki"); // para agregar un valor solo si no existe, en este caso seria Kaneki
console.log(protagonistas);

protagonistas.delete("Deku"); // para eliminar un valor especifico en este caso seria Deku
console.log(protagonistas);

protagonistas.delete("Kaneki"); // No exite las actualizaciones el javascript pero podemos hacerlo de este modo 
protagonistas.add("Ash");
console.log(protagonistas);

let arrayProtagonistas = Array.from(protagonistas).sort((a, b) => a-b ); // lo convertimos en un array para poder ordenarlo 
console.log(arrayProtagonistas);


//Maps
let Personaje = new Map();
Personaje.set("nombre", "Ash");
Personaje.set("edad", 10);
console.log(Personaje);

Personaje.set("Ciudad", "Pueblo Paleta");
console.log(Personaje);

Personaje.delete("Ciudad");
console.log(Personaje);

Personaje.set("edad", 12);
console.log(Personaje);

let arrayPersonaje = Array.from(Personaje.entries()).sort((a, b) => 
a[0].localeCompare(b[0]));
console.log(arrayPersonaje);
