const {getLugarLatitudLongitud} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        demand:true,
        desc:'digitar direccion de ciudad para mostrar clima'
    }
}).argv;


 const getInfo = async (direccion)=>{

    try{
        const coordenadas = await getLugarLatitudLongitud(direccion);
        const clima = await getClima(coordenadas.latitud, coordenadas.longitud);
        return `El clima de ${direccion} es de ${clima}`
    }catch(e){  
        return `No se pudo encontrar el clima de ${direccion}` 
    }
    
 };

 getInfo(argv.direccion).then(console.log).catch(console.log);


  

