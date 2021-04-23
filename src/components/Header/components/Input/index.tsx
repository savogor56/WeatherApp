import s from './style.module.scss'
import React, {useEffect, useRef, useState} from 'react'
import {useAppDispatch} from '../../../../services/hooks/reduxHooks'
import {setCity} from '../../../../store/weather'

interface Props {
    onSelect: () => void
}

export const Input: React.FC<Props> = ({onSelect}) => {
    const [value, setValue] = useState('')
    const [change, setChange] = useState(false)
    const input = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (change) {
            dispatch(setCity(value))
            setChange(false)
            onSelect()
        }
    }, [change])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const handleSelect = () => {
        setChange(true)
    }

    const handleFocus = () => {
        if (input) input.current?.focus()
    }

    return (
        <div className={s.root} onClick={handleFocus}>
            <input
                ref={input}
                value={value}
                onChange={handleChange}
                onKeyPress={(e => {
                    if (e.key === 'Enter') handleSelect()
                })}
            />
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    handleSelect()
                }}
            >
                OK
            </button>
        </div>
    )
}