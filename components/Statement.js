import style from '../styles/Statement.module.css'
import { useEffect, useState } from 'react'

export default function Statement(){
    let statementsArray = [
        <h4>FREE SHIPPING ON ORDERS OVER $29</h4>,
        <h4>All products are certified carbon neutral</h4>,
        <h4>Donate to Ukraine Crisis Relief Fund</h4>
    ]
    let [counter, setCounter] = useState(0)
    function goUpArray(e){
        e.target.previousElementSibling.className=style.transitionRight
        setTimeout(()=>{
            e.target.previousElementSibling.className=''
        },400)

        setCounter( prevCounter=> {
            let newCounter = prevCounter + 1
            if (statementsArray[newCounter] === undefined){
                newCounter = 0
            }
            return newCounter
        })
    }
    function goDownArray(e){
        e.target.nextElementSibling.className=style.transitionLeft
        setTimeout(()=>{
            e.target.nextElementSibling.className=''
        },400)
        setCounter( prevCounter=> {
            let newCounter = prevCounter - 1
            if (statementsArray[newCounter] === undefined){
                newCounter = 2
            }
            return newCounter
        })
    }

    return (
        <div className={style.wrapper}>
            <div onClick={goDownArray} className={style.left}>&#x3c;</div>
            {statementsArray[counter]}
            <div onClick={goUpArray} className={style.right}>&#x3e;</div>
        </div>
    )
}