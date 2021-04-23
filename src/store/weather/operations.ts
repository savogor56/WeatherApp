import {AppDispatch} from '../index'
import {weatherAPI} from '../../api/weatherApi'
import {setError, setIsFetching, setWeatherData} from './index'
import {WeatherData} from '../../services/types/weatherTypes'

const _fetchStart = (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setError(null))
    dispatch(setWeatherData(null))
}

export const fethWeatherByName = (city: string, measure: string) => async (dispatch: AppDispatch) => {
    _fetchStart(dispatch)
    await weatherAPI.getWeatherByCityName(city, measure)
        .then(res => dispatch(setWeatherData(res.data)))
        .catch(err => {
            if (err.response) {
                dispatch(setError(err.response.data))
            } else if (err.request) {
                dispatch(setError({
                    cod: '1',
                    message: 'Ошибка сети'
                }))
            }
        })
    dispatch(setIsFetching(false))
}

export const fetchWeatherByGeo = (lat: number, lon: number, measure: string) => async (dispatch: AppDispatch) => {
    _fetchStart(dispatch)
    await weatherAPI.getWeatherByGeo(lat, lon, measure)
        .then(res => dispatch(setWeatherData(res.data)))
        .catch(err => {
            if (err.response) {
                dispatch(setError(err.response.data))
            } else if (err.request) {
                dispatch(setError({
                    cod: '1',
                    message: 'Ошибка сети'
                }))
            }
        })
    dispatch(setIsFetching(false))
}