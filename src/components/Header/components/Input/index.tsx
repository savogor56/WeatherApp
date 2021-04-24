import s from './style.module.scss'
import React, {useEffect, useRef, useState} from 'react'
import {useAppDispatch} from '../../../../services/hooks/reduxHooks'
import {setCity} from '../../../../store/weather'

interface Props {
    onClose: () => void
}

export const Input: React.FC<Props> = ({onClose}) => {
    const [value, setValue] = useState('')
    const [change, setChange] = useState(false)
    const input = useRef<HTMLInputElement | null>(null)
    const wrap = useRef<HTMLDivElement | null>(null)
    const dispatch = useAppDispatch()

    const handleClickOutside = (e: MouseEvent) => {
        const {current} = wrap
        if (current && !current.contains((e.target as Node))) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (change) {
            dispatch(setCity(value))
            setChange(false)
            onClose()
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
        <div className={s.root} onClick={handleFocus} ref={wrap}>
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