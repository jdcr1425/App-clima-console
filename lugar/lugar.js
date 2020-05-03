const axios = require('axios');

const getLugarLatitudLongitud = async (direccion)=>{
    
    const encodedURI = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': 'd7764aa058mshf1f7d8fc4a48974p11fe24jsn7ac187438eae'}
    });

    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0){
        throw new Error (`No hay resultados para ${direccion}`);
    }

    const {name, lat, lon} = respuesta.data.Results[0];

    return{
        "direccion": name,
        "latitud": lat,
        "longitud": lon
    };
};

module.exports = {getLugarLatitudLongitud};