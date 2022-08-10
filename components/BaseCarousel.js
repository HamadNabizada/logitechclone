import style from '../styles/BaseCarousel.module.css'
import productData from './productData.js'


export default function BaseCarousel(props){
    let wrapperStyle = {
        backgroundColor: props.BGColor,
        color: props.textColor
    }
    let imgBG = {
        backgroundColor: props.innerBGColor
    }
    return(
        <div style={wrapperStyle} className={style.wrapper}>
            <div className={style.text}>
                <h2 className={style.title}>{props.title}</h2>
                <p className={props.description}>{props.description}</p>
            </div>
            <div className={style.carouselContainerWrapper}>
                <div className={style.carouselItemWrapper}>
                    <div style={imgBG} className={style.imgContainer}>
                        <img className={style.productImg} src={productData[0].imgSource} alt="#" />
                    </div>
                    <div className={style.productInfo}>
                        <h4 className={style.productTitle}>{productData[0].product}</h4>
                        <p>{productData[0].productItem}</p>
                        <p>{productData[0].price}</p>
                    </div>
                </div>
                <div className={style.carouselItemWrapper}>
                    <div style={imgBG} className={style.imgContainer}>
                        <img className={style.productImg} src={productData[0].imgSource} alt="#" />
                    </div>
                    <div className={style.productInfo}>
                        <h4 className={style.productTitle}>{productData[0].product}</h4>
                        <p>{productData[0].productItem}</p>
                        <p>{productData[0].price}</p>
                    </div>
                </div>
                <div className={style.carouselItemWrapper}>
                    <div style={imgBG} className={style.imgContainer}>
                        <img className={style.productImg} src={productData[0].imgSource} alt="#" />
                    </div>
                    <div className={style.productInfo}>
                        <h4 className={style.productTitle}>{productData[0].product}</h4>
                        <p>{productData[0].productItem}</p>
                        <p>{productData[0].price}</p>
                    </div>
                </div>
            </div>
            <div className={style.arrowsWrapper}>
                <div className={style.arrowContainer}>
                    <img className={style.arrowIcon} src="/icons/left_arrow.svg" alt="Left Arrow" />
                </div>
                <div className={style.arrowContainer}>
                    <img className={style.arrowIcon} src="/icons/right_arrow.svg" alt="Left Arrow" />
                </div>
            </div>
        </div>
    )
}