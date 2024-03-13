const gato={
    nombre:'Felix',
    duerme:true,
    edad:2,
    enemigos:["Agua","perro"],
    comer: function(){
        console.log("Ahora esta comiendo");
    },
    atacar(presa){
        return `${this.nombre} esta atacando a un: ${presa}`;
    }
};
gato.comer();
console.log(gato.atacar("ave"));

/* Ejemplo de metodos y propiedades
const frutas=["pera","manzana","uva"];

//propiedad
console.log(frutas.length);

//metodo
frutas.push("Aguacate");
console.log(frutas); */