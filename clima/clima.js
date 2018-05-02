const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=36fc99bbac3152d962cc5bd37f099807`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}