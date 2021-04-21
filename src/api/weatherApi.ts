import {instance} from './config'
import {WeatherData} from '../services/types/weatherTypes'

export const weatherAPI = {
    async getWeatherByCityName(city: string) {
        const response = await instance.get<WeatherData>(`weather?q=${city}`)
        return response.data
    },
    async getWeatherByGeo(lat: number, lon: number) {
        const response = await instance.get<WeatherData>(`weather?lat=${lat}&lon=${lon}`)
        return response.data
    }
}