import style from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={style.navbarMainWrapper}>
            <section className={style.allNav}></section>
            <div className={style.navbarSub}>
                <div className={style.menuBtn}>
                    MenuBtn
                </div>
                <h2 className={style.logo}>
                    LOGITECH G
                </h2>
                <ul className={style.cartWrapper}>
                    <li className={style.cartSearch}>Cart</li>
                    <li className={style.cartSearch}>Search</li>
                </ul>
            </div>
        </nav>
    )
}