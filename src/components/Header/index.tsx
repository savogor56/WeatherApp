import s from './style.module.scss'
import React, {useState} from 'react'
import {useAppSelector} from '../../services/hooks/reduxHooks'
import {ReactComponent as ArrSvg} from './assets/Arr.svg'
import {Toggle} from './components/toggle'

interface Props {
    onCityChange: (city: string) => void
}

export const Header: React.FC<Props> = ({onCityChange}) => {
    const [isSelected, setIsSelected] = useState(true)
    const cityName = useAppSelector(state => state.weather.weatherData?.name)

    return(
        <header className={s.root}>
            <div className={s.title}>
                {isSelected ?
                    <div>
                        {cityName}
                    </div> :
                    <div>
                        input
                    </div>
                }
                <Toggle />
            </div>
            {
                isSelected &&
                <div className={s.subTitle}>
                    <div>
                        Сменить город
                    </div>
                    <div>
                        <ArrSvg />
                        <span>Моё местоположение</span>
                    </div>
                </div>
            }
        </header>
    )
}