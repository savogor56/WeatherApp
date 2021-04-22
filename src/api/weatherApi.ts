import {instance} from './config'
import {WeatherData} from '../services/types/weatherTypes'

export const weatherAPI = {
    async getWeatherByCityName(city: string, measure: string) {
        const response = await instance.get<WeatherData>(`weather?q=${city}&units=${measure}`)
        return response.data
    },
    async getWeatherByGeo(lat: number, lon: number, measure: string) {
        const response = await instance.get<WeatherData>(`weather?lat=${lat}&lon=${lon}&units=${measure}`)
        return response.data
    }
}