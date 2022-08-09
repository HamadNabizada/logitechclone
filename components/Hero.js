import style from '../styles/Hero.module.css'
import data from './heroData.js'
import HeroCard from './HeroCard'
import { useState, useEffect} from 'react'

export default function Hero(){
    let [currentCard, setCurrentCard] = useState(0)
    let [bulletElement, setBulletElement] = useState('')

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
            if (newCurrentCard === -1 ){
                newCurrentCard = data.length -1
            }
            return newCurrentCard
        })
    }
    function setAsActiveBullet(e){
        let indexText = e.target.id
        let indexInt = parseInt(indexText)
        setCurrentCard(indexInt)
    }
    useEffect(()=>{
        setBulletElement(prev =>{
            let newBulletElement = data.map((item,index)=>{
                let bulletStyle = (index === currentCard) ? `${style.bullet} ${style.bulletActive}` : style.bullet
                return(
                    <div id={index} onClick={setAsActiveBullet} key={index} className={bulletStyle}></div>
                )
            })
            return newBulletElement
        })
    },[currentCard])
    
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
            <div className={style.carouselButton}>
                {bulletElement}
            </div>
        </div>
    )
}

