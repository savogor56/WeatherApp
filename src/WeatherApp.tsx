import React, {useEffect, useState} from 'react'
import {useGeo} from './services/hooks/useGeo'
import {fetchWeatherByGeo, fethWeatherByName} from './store/weather/operations'
import {useAppDispatch, useAppSelector} from './services/hooks/reduxHooks'
import {Loader} from './components/Loader'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Content} from './components/Content'
import s from './style.module.scss'

export const WeatherApp = () => {
    const location = useGeo()
    const dispatch = useAppDispatch()
    const {isFetching} = useAppSelector(state => state.weather)
    const [measure, setMeasure] = useState('metric')
    const [city, setCity] = useState('')

    useEffect(() => {
        if (!city && location.loaded && location.coord) {
            const {lat, lon} = location.coord
            dispatch(fetchWeatherByGeo(lat, lon, measure))
        }

        if (city) {
            dispatch(fethWeatherByName(city, measure))
        }

        if (!city && location.error) {
            dispatch(fethWeatherByName('Москва', measure))
        }
        
    }, [city, location, dispatch, measure])

    const handleChangeCity = (city: string) => {
        setCity(city)
    }

    return (
      <div className={s.root}>
          {isFetching && <Loader/>}
          {!isFetching &&
          <>
            <Header onCityChange={handleChangeCity} />
            <Content />
            <Footer />
          </>
          }
      </div>
    )
}
