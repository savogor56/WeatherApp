import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WeatherData} from '../../services/types/weatherTypes'

export const weather = createSlice({
    name: 'weather',
    initialState: {
        isFetching: false,
        weatherData: null as null | WeatherData
    },
    reducers: {
        setIsFetching: (state, {payload}: PayloadAction<boolean>) => {
            state.isFetching = payload
        },
        setWeatherData: (state, {payload}: PayloadAction<WeatherData>) => {
            state.weatherData = payload
        }
    }
})

export default weather.reducer
export const {setIsFetching, setWeatherData} = weather.actions