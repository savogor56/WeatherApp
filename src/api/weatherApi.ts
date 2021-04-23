import {instance} from './config'
import {WeatherData} from '../services/types/weatherTypes'

export const weatherAPI = {
    async getWeatherByCityName(city: string, measure: string) {
        return await instance.get<WeatherData>(`weather?q=${city}&units=${measure}`)
    },
    async getWeatherByGeo(lat: number, lon: number, measure: string) {
        return instance.get<WeatherData>(`weather?lat=${lat}&lon=${lon}&units=${measure}`)
    }
}