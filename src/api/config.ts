import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: '9a4c2a9b3a5ce512e4e56d9814e60173',
        lang: 'ru'
    }
})