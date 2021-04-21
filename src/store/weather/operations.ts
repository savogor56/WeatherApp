import {AppDispatch} from '../index'
import {weatherAPI} from '../../api/weatherApi'
import {WeatherData} from '../../services/types/weatherTypes'
import {setIsFetching, setWeatherData} from './index'

export const fethWeatherData = (city?: string, lat?: number, lon?: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    let weatherData: WeatherData | null = null
    if (city) {
     weatherData = await weatherAPI.getWeatherByCityName(city)
    } else if (lat && lon) {
        weatherData = await weatherAPI.getWeatherByGeo(lat, lon)
    }
    if (weatherData) dispatch(setWeatherData(weatherData))
    dispatch(setIsFetching(false))
}