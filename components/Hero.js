import style from '../styles/Hero.module.css'
import data from './heroData.js'

export default function Hero(){

    console.log(data);
    return( 
        <div className={style.wrapper}>
            <h1>HERO</h1>
        </div>
    )
}