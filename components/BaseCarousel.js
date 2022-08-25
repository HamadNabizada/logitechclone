import style from '../styles/BaseCarousel.module.css'
import { useState, useRef, useEffect } from 'react'


export default function BaseCarousel(props){
    let [selectedProduct, setSelectedProduct] = useState(0)
    let [numOfProductPerGroup, setnumOfProductPerGroup] = useState(3)
    let [productElements, setProductElements] = useState('')
    let [imageGroup, setImageGroup] = useState(0)
    let currentImage = useRef(null)
    let itemArray = []
    let groupingCounter = 0
    for (let i = 0; i < props.productData.length; i++) {
        let grouping = props.productData.slice(numOfProductPerGroup * groupingCounter, (numOfProductPerGroup * groupingCounter) + numOfProductPerGroup)
        groupingCounter++
        if(grouping.length !== 0){
            itemArray.push(grouping)
        }
    }

    let wrapperStyle = {
        backgroundColor: props.BGColor,
        color: props.textColor
    }
    let imgBG = {
        backgroundColor: props.innerBGColor
    }
    let hoverStyle = {
        textDecoration: 'underline'
    }
    function handleHover(e){
        console.log('hover');
    }
    let carouselItemWrapperStyle = {

    }
    useEffect(()=>{
        let chunkSize = parseInt(props.numOfProducts)
        setnumOfProductPerGroup(chunkSize)
    },[])

    useEffect(()=>{
        setProductElements(prevElements =>{
            let newproductElements = itemArray[imageGroup].map((item,index) => {
                return(
                    <div key={index} id={index} onMouseEnter={handleHover} className={style.carouselItemWrapper}>
                        <div style={imgBG} className={style.imgContainer}>
                            <img className={style.productImg} src={item.imgSource} alt={item.product} />
                        </div>
                        <div className={style.productInfo}>
                            <h4 className={style.productTitle}>{item.product}</h4>
                            <p>{item.productItem}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>   
                )
            })
            return newproductElements
        })
    }, [imageGroup,numOfProductPerGroup])
    function upOneGroup(){
        setImageGroup(prev =>{
            let newGroup = prev + 1
            if(newGroup >= itemArray.length){
                newGroup = 0
            }
            return newGroup
        })
        
    }
    return(
        <div style={wrapperStyle} className={style.wrapper}>
            <div className={style.text}>
                <h2 className={style.title}>{props.title}</h2>
                <p className={props.description}>{props.description}</p>
            </div>
            <div className={style.carouselContainerWrapper}>
                <div className={style.arrowsWrapper}>
                    <div className={style.arrowContainer}>
                        <img onClick={upOneGroup} className={style.arrowIcon} src="/icons/left_arrow.svg" alt="Left Arrow" />
                    </div>
                    <div className={style.arrowContainer}>
                        <img onClick={upOneGroup} className={style.arrowIcon} src="/icons/right_arrow.svg" alt="Left Arrow" />
                    </div>
                </div>
                {productElements}
            </div>

        </div>
    )
}

