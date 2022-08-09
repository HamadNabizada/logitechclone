import style from '../styles/BaseCarousel.module.css'


export default function BaseCarousel(props){
    return(
        <div className={style.wrapper}>
            <div className={style.text}>
                <h2 className={style.title}>{props.title}</h2>
                <p className={props.description}>{props.description}</p>
            </div>
            <div className={style.carousel}>
                <div className={style.imgContainer}>
                    <img src="#" alt="#" />
                </div>
                <div className={style.productInfo}>
                    <h4>{props.product}</h4>
                    <p>{props.productItem}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}