import style from './css/container.module.css'

export default function Container({children}) {
    return <div className={style.parentContatiner}>{children}</div>
}