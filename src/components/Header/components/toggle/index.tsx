import s from './style.module.scss'

export const Toggle = () => {
    return (
        <div className={s.root}>
            <span>&deg;</span>
            <div>
                Toggle
            </div>
        </div>
    )
}