const axios = require('axios');

const getClima = async (lat,long)=>{

    const respuesta  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1532b53c98158220f44bd898d5a9fea2&units=metric`)

    return respuesta.data.main.temp;
};

module.exports = {getClima};