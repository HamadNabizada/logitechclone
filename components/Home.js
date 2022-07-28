import style from '../styles/Homes.module.css'
import Header from './Header.js'

export default function Home(){
    return(
        <div className={style.wrapper}>
            <Header/>
        </div>
    )
}