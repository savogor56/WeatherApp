import s from './style.module.scss'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../services/hooks/reduxHooks'
import {ReactComponent as ArrSvg} from './assets/Arr.svg'
import {Toggle} from './components/Toggle'
import {Input} from './components/Input'
import {setCity} from '../../store/weather'

export const Header = () => {
    const [isSelected, setIsSelected] = useState(true)
    const [findGeo, setFindGeo] = useState(false)
    const cityName = useAppSelector(state => state.weather.weatherData?.name)
    const error = useAppSelector(state => state.weather.error)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (findGeo) {
            dispatch(setCity(''))
            setFindGeo(false)
        }
    }, [findGeo])

    const handleShowInput = () => {
        setIsSelected(prevState => !prevState)
    }

    const handleSelectMyGeo = () => {
        setFindGeo(true)
    }

    return(
        <header className={s.root}>
            <div className={s.title}>
                {isSelected ?
                    <div>
                        {(cityName && !error) && cityName}
                        {error && error.message}
                    </div> :
                    <Input onSelect={handleShowInput} />
                }
                <Toggle />
            </div>
            {
                isSelected &&
                <div className={s.subTitle}>
                    <div onClick={handleShowInput}>
                        Сменить город
                    </div>
                    <div onClick={handleSelectMyGeo}>
                        <ArrSvg />
                        Моё местоположение
                    </div>
                </div>
            }
        </header>
    )
}