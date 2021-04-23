import s from './style.module.scss'

export const Toggle = () => {
    return (
        <div className={s.root}>
            <span>&deg;</span>
            <div className={s.toggle}>
                <div className={s.selected}>
                    c
            </div>
                <div>
                    f
            </div>
            </div>
        </div>
    )
}