let frutas = ["manzana","pera","fresa","platano"];
/*
for(let i=0 ; i<frutas.length ; i++ ){
    console.log(frutas[i]);
}
*/

/*
for (variable of iterable) {
  statement
}
*/
/*
for (let fruta of frutas){
    console.log(fruta);
}
*/

for (let fruta in frutas){
    console.log(fruta);
}