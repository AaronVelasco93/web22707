const frutas=[];

const fruta=prompt("Que frutas deseas comprar?");
frutas.push(fruta);
while(confirm("Desea agregar otra fruta?")){
    const fruta=prompt("Que otra fruta desea agregar?");
    frutas.push(fruta);
}

console.log("Usted Compro: ");
//arreglo.forEach
frutas.forEach((Nombrefruta,indice)=>{
    console.log(`${indice+1} : ${Nombrefruta}`)
});
/*
arr.forEach(function callback(currentValue,index,array)){
    //Iterador
}; */