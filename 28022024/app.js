// Estructuras de control
/**
 * if (Condicion){
 *      bloque true
 *  }else {
 *      bloque  falso
 * }
 * 
 */
/*
let textJavascript = prompt("Escriba 'javascript'");

if(textJavascript === "javascript"){
    console.log("Lo escribiste super bien !");
}else {
    console.log("Forma incorrecta");
}
*/
//Ejemplo 2
/*
let numeroUser= parseInt(prompt("Ingresa un numero de 1 a 10"));

if (numeroUser<=10 && numeroUser >= 1){
    console.log("Bien");
}else {
    console.log("Mal");
}
*/
/*
let opcionUser= prompt(`
    Elija una opcion:
    1.- Libro
    2.- Pelicula
    3.- Juego
`);

switch (opcionUser){

    case "1":
        console.log("El principito");
        break;
    case "2":
        console.log("Matrix");
        break;        
    case "3":
        console.log("Mario Bros");
        break;
    default:
        console.log("No corresponde");
        break;        

}

*/
/*
//While
let numero=0;
while(numero <= 10){
    console.log(numero);
    numero++;
}
console.log("FIN:"+numero);
*/


/*
function getRamdonInt(min, max){
    return Math.floor( Math.random() *(max - min) +min );
}
*/

let numeroMaquina = Math.floor( Math.random() *(10 - 1 ) ) + 1;
console.log(numeroMaquina); 

let numeroUser=parseInt(prompt("Adivine el numero del 1 al 10"));

let vida=5;

while(numeroMaquina !== numeroUser && vida>1){
    vida --;
    numeroUser=parseInt(prompt("Vuelve a intentarlo, tu vidas:"+vida));
}

if(numeroMaquina === numeroUser){
    console.log("Ganaste");
}else{

    console.log("Perdiste, el numero era: "+numeroMaquina);
}


