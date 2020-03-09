const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        des: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

//console.log(argv);
//lugar.getlugarlatlon(argv.direccion).then(resp => {
//       console.log(resp);
//   })
//   .catch(err => {
//       console.log(err);
//  });

//clima.getclima(40.41, -3.7)
//   .then(console.log)
//  .catch(console.log);

const getinfo = async(dire) => {

    try {
        let coor = await lugar.getlugarlatlon(dire);
        let temp = await clima.getclima(coor.lat, coor.lon);
        return (`El clima de ${dire} es de ${temp}`);
    } catch (e) {
        return (`No se pudo determinar el clima de ${dire}`);
    }

};

getinfo(argv.direccion)
    .then(console.log)
    .catch('Eroorr en la promesa', console.log);