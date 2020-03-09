const axios = require('axios'); //axios trabaja con promesas

const getlugarlatlon = async(dir) => {
    const encodeurl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeurl}`,
        headers: { 'x-rapidapi-key': '5199748fdbmsh8a2a3508713f095p152402jsn1b17270cd8d5' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new error('No hay resultados');
    }
    const data = resp.data.Results[0];
    const dire = data.name;
    const lat = data.lat;
    const lon = data.lon;
    console.log(data);

    return {
        dire,
        lat,
        lon
    }

}

module.exports = {
    getlugarlatlon

}