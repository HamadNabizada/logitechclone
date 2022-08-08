import style from '../styles/Hero.module.css'
import data from './heroData.js'
import HeroCard from './HeroCard'
import { useState } from 'react'

export default function Hero(){
    let [currentCard, setCurrentCard] = useState(0)
    console.log(data[currentCard].imgSource);
    return( 
        <div className={style.wrapper}>
            <div className={style.arrowsWrapper}>
                <p className={style.arrow}>&lsaquo;</p>
                <p className={style.arrow}>&rsaquo;</p>
            </div>
            <HeroCard
                imgSource={data[currentCard].imgSource}
                title={data[currentCard].title}
                description={data[currentCard].description}
                btnText={data[currentCard].btnText}
            />
        </div>
    )
}