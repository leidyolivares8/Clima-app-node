const axios = require('axios'); //peticion a servicio rest




const getclima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=498e4a77b8bc8f60f053e45f3542fc4a&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getclima
}