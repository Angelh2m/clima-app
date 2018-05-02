const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBB1cAdGYKWGjpsCVSEZJF9a1Dl7izXVIg`)

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciuad');
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLong
}