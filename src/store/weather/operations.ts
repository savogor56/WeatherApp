import {AppDispatch} from '../index'
import {weatherAPI} from '../../api/weatherApi'
import {setIsFetching, setWeatherData} from './index'

export const fethWeatherByName = (city: string, measure: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const weatherData = await weatherAPI.getWeatherByCityName(city, measure)
    dispatch(setWeatherData(weatherData))
    dispatch(setIsFetching(false))
}

export const fetchWeatherByGeo = (lat: number, lon: number, measure: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const weatherData = await weatherAPI.getWeatherByGeo(lat, lon, measure)
    dispatch(setWeatherData(weatherData))
    dispatch(setIsFetching(false))
}