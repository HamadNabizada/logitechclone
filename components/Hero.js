import style from '../styles/Hero.module.css'
import data from './heroData.js'
import HeroCard from './HeroCard'
import { useState, useRef } from 'react'

export default function Hero(){
    let [currentCard, setCurrentCard] = useState(0)

    function nextBG(){
        setCurrentCard(prevCurrentCard =>{
            let newCurrentCard = prevCurrentCard + 1
            if (newCurrentCard === data.length){
                newCurrentCard = 0
            }
            return newCurrentCard
        })
    }
    function prevBG(){
        setCurrentCard(prevCurrentCard =>{
            let newCurrentCard = prevCurrentCard - 1
            console.log(newCurrentCard);
            if (newCurrentCard === -1 ){
                newCurrentCard = data.length -1
            }
            return newCurrentCard
        })
    }
    return( 
        <div className={style.wrapper}>
            <div className={style.arrowsWrapper}>
                <p onClick={prevBG} className={`${style.arrow} ${style.arrowLeft}`}>&lsaquo;</p>
                <p onClick={nextBG} className={`${style.arrow} ${style.arrowRight}`}>&rsaquo;</p>
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