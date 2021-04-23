import {useAppSelector} from '../../services/hooks/reduxHooks'
import {ReactComponent as Clear} from './assets/Clear.svg'
import {ReactComponent as Rain} from './assets/Rain.svg'
import {ReactComponent as Clouds} from './assets/Clouds.svg'
import {ReactComponent as Storm} from './assets/Thunderstorm.svg'
import {upperFirstChar} from '../../services/utils'
import s from './style.module.scss'

const getIcon = (weather?: string) => {
    switch (weather) {
        case 'Clear':
            return <Clear />
        case 'Rain':
            return <Rain />
        case 'Clouds':
            return <Clouds />
        case 'Storm':
            return <Storm />
        default:
            return <Clouds />
    }
}

export const Content = () => {
    const weatherData = useAppSelector(state => state.weather.weatherData)
    return(
        <main className={s.root}>
            <div className={s.content}>
                <div className={s.info}>
                    {getIcon(weatherData?.weather[0].main)}
                    <div>{weatherData?.main.temp.toFixed()}&deg;</div>
                </div>
                <div className={s.subInfo}>{weatherData && upperFirstChar(weatherData.weather[0].description)}</div>
            </div>
        </main>
    )
}