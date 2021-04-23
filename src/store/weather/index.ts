import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WeatherData} from '../../services/types/weatherTypes'
import {Error} from '../../services/types/responseTypes'

export const weather = createSlice({
    name: 'weather',
    initialState: {
        isFetching: false,
        weatherData: null as null | WeatherData,
        measure: 'metric',
        city: '',
        error: null as Error | null
    },
    reducers: {
        setIsFetching: (state, {payload}: PayloadAction<boolean>) => {
            state.isFetching = payload
        },
        setWeatherData: (state, {payload}: PayloadAction<WeatherData | null>) => {
            state.weatherData = payload
        },
        setMeasure: (state, {payload}: PayloadAction<string>) => {
            state.measure = payload
        },
        setCity: (state, {payload}: PayloadAction<string>) => {
            state.city = payload
        },
        setError: (state, {payload}: PayloadAction<Error | null>) => {
            state.error = payload
        }
    }
})

export default weather.reducer
export const {setIsFetching, setWeatherData, setMeasure, setCity, setError} = weather.actions