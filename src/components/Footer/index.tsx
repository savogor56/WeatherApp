import {useAppSelector} from '../../services/hooks/reduxHooks'
import s from './style.module.scss'
import {getDegreeDesc} from '../../services/utils'

export const Footer = () => {
    const weatherData = useAppSelector(state => state.weather.weatherData)
    const measure = useAppSelector(state => state.weather.measure)

    return(
        <footer className={s.root}>
            <div>
                <p className={s.title}>Ветер</p>
                <p className={s.info}>
                    {weatherData?.wind.speed.toFixed()} &nbsp;
                    {measure === 'metric' ? 'м/с' : 'миль/ч' },&nbsp;
                    {weatherData && getDegreeDesc(weatherData.wind.deg)}
                </p>
            </div>
            <div>
                <p className={s.title}>Давление</p>
                <p className={s.info}>{weatherData?.main.pressure} мм рт.ст.</p>
            </div>
            <div>
                <p className={s.title}>Влажность</p>
                <p className={s.info}>{weatherData?.main.humidity}%</p>
            </div>
            <div>
                <p className={s.title}>Вероятность дождя</p>
                <p className={s.info}>{weatherData?.clouds.all}%</p>
            </div>
        </footer>
    )
}