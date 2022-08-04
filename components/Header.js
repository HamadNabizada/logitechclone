import style from '../styles/Header.module.css'
import Statement from './Statement'


export default function Header(){
    return(
        <div className={style.wrapper}>
            <div className={style.linksWrapper}>
                <ul className={style.myLinks}>
                    <li className={style.linkItem}><img className={style.logitechLogo} src="/images/logitechLogo.svg" alt="Logitech Logo" /></li>
                    <li className={style.linkItem}><img className={style.astroLogo} src="/images/astroLogo.svg" alt="Astro Logo" /></li>
                    <li className={style.linkItem}><img className={style.blueLogo} src="/images/blueLogo.svg" alt="Blue Logo" /></li>
                    <li className={style.linkItem}><img className={style.streamlabsLogo} src="/images/streamlabs-bottom.svg" alt="Streamlabs Logo" /></li>
                    <li className={style.linkItem}><img className={style.ueLogo} src="/images/ue-bottom.svg" alt="Ultimate Ears Logo" /></li>
                    <li className={style.linkItem}><img className={style.jaybirdLogo} src="/images/jaybird-bottom.svg" alt="Jaybird Logo" /></li>
                </ul>
                <ul className={style.myLinks}>
                    <li className={style.linkItem}>EN</li>
                    <li className={style.linkItem}>My Account</li>
                </ul>
            </div>
            <Statement />
        </div>
    )
}