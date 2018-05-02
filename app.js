const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${ temp }`
    } catch (e) {
        return `No se puedo determinal el clima ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log('Temp ==> ', mensaje))
    .catch(e => console.log(e))

lugar.getLugarLatLong(argv.direccion)
    .then(resp => {
        console.log('Lugar ==> ', resp);
    })
    .catch(e => console.log(e))


// clima.getClima(36.778261, -119.4179324)
//     .then(el => console.log('Clima ==> ', el))
//     .catch(err => console.log(err))