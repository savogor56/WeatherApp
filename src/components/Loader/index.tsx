import s from "./style.module.scss"

export const Loader = () => {
    return (
        <div className={s.loader} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}