const gato={
    nombre:'Felix',
    duerme:true,
    edad:2,
    enemigos:["Agua","perro"],
    otros:{
        amigos:["Lucifer","Satanas","Salem"],
        favoritos:{
            comida:{
                fria:"Atun",
                caliente:"pollo"
            }
        }
    }
};

console.log(gato.otros.favoritos.comida.fria);
/* //CRUD
    //crear
    gato.color='mandarino';
    console.log(gato.color);
//leer
    console.log(gato.edad);
//Actualizar
    gato.edad=5;
    console.log(gato.edad);
    console.log(gato);
//eliminar
    delete gato.duerme;
    console.log(gato)

console.log(gato.enemigos[1]); */

console.log( gato.hasOwnProperty("salud"));
console.log( gato.hasOwnProperty("nombre"));
