const ACCESS_KEY = '1490d3faa66e2f52f4bf59aa5133fe93'

const _retrieveWeatherForecastMockedData = () => fetch('/data/weather-api-mocked-data.json')
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


const _retrieveWeatherForecastApiData = coordinates => fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`)
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


const retrieveWeatherForecastData = async (coordinates, isMocked) => {
    if (isMocked) {
        return await _retrieveWeatherForecastMockedData()
    }
    return await _retrieveWeatherForecastApiData(coordinates)
}