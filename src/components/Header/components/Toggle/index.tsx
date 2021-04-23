import {useEffect, useState} from 'react'
import cn from 'classnames'
import {useAppDispatch, useAppSelector} from '../../../../services/hooks/reduxHooks'
import s from './style.module.scss'
import {setMeasure} from '../../../../store/weather'

export const Toggle = () => {
    const [change, setChange] = useState(false)
    const measure = useAppSelector(state => state.weather.measure)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (change) {
            measure === 'metric' ?
                dispatch(setMeasure('imperial')) :
                dispatch(setMeasure('metric'))
            setChange(false)
        }
    }, [change])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
       if (!e.currentTarget.className) setChange(true)
    }
    return (
        <div className={s.root}>
            <span>&deg;</span>
            <div className={s.toggle}>
                <div
                    className={cn({
                        [s.selected]: measure === 'metric'
                    })}
                    onClick={handleClick}
                >
                    C
                </div>
                <div
                    className={cn({
                        [s.selected]: measure === 'imperial'
                    })}
                    onClick={handleClick}
                >
                    F
                </div>
            </div>
        </div>
    )
}