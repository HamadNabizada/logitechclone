import style from '../styles/Statement.module.css'
import { useEffect, useState, useRef } from 'react'


export default function Statement(){
    let [autoPlay, setAutoPlay] = useState(true)
    let currentRef = useRef()
    let timeout = null
    let statementRef = useRef()
    useEffect(()=>{
        timeout = autoPlay && setTimeout(goUpArray, 4000)
    })
    let [counter, setCounter] = useState(0)
    // let statementsArray = [
    //     <h4 key={nanoid()} ref={currentRef}>FREE SHIPPING ON ORDERS OVER $29</h4>,
    //     <h4 key={nanoid()} ref={currentRef}>All products are certified carbon neutral</h4>,
    //     <h4 key={nanoid()} ref={currentRef}>Donate to Ukraine Crisis Relief Fund</h4>
    // ]
    let myStatement = <h4  ref={currentRef}>FREE SHIPPING ON ORDERS OVER $29</h4>
    if(counter === 1){
        myStatement = <h4  ref={currentRef}>All products are certified carbon neutral</h4>
    }
    if(counter === 2){
        myStatement = <h4  ref={currentRef}>Donate to Ukraine Crisis Relief Fund</h4>
    }
    function goUpArray(e){
        console.log('rerender')
        currentRef.current.className=style.transitionRight
        setTimeout(()=>{
            currentRef.current.className=style.statement
        },1000)

        setCounter( prevCounter=> {
            let newCounter = prevCounter + 1
            if (newCounter === 3){
                newCounter = 0
            }
            return newCounter
        })
    }
    function goDownArray(e){
        currentRef.current.className=style.transitionLeft
        setTimeout(()=>{
            currentRef.current.className=''
        },400)
        setCounter( prevCounter=> {
            let newCounter = prevCounter - 1
            if (newCounter === -1){
                newCounter = 2
            }
            return newCounter
        })
    }
    function pauseSlide(){
        setAutoPlay(false)
        clearTimeout(timeout)
    }
    function resumeSlide(){
        setAutoPlay(true)
    }
    return (
        <div onMouseEnter={pauseSlide} onMouseLeave={resumeSlide} ref={statementRef} className={style.wrapper}>
            <div onClick={goDownArray} className={style.left}>&lsaquo;</div>
            {myStatement}
            <div onClick={goUpArray} className={style.right}>&rsaquo;</div>
        </div>
    )
}