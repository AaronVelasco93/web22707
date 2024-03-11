const frutas=[];
const fruta=prompt("Que frutas deseas comprar?");
frutas.push(fruta);
while(confirm("Desea agregar otra fruta?")){
    const fruta=prompt("Que otra fruta desea agregar?");
    frutas.push(fruta);
}
console.log("Usted Compro: ");
for(let fruta of frutas){
    console.log(fruta);
}