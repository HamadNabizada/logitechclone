import style from '../styles/HeroCard.module.css'
import { useState, useRef, useEffect } from 'react'


export default function HeroCard(props){
    let heroBGRef = useRef()
    let myBG = {
        backgroundImage: `url(${props.imgSource})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    
    return(
        <div style={myBG} ref={heroBGRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>{props.title}</h1>
                <h3 className={style.description}>{props.description}</h3>
                <button className={style.shopBtn}>{props.btnText}</button>
            </div>
        </div>
    )
}