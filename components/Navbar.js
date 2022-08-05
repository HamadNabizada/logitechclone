import style from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={style.navbarMainWrapper}>
            <section className={style.allNav}></section>
            <div className={style.navbarSub}>
                <div className={style.menuBtn}>
                    MenuBtn
                </div>
                <h2 className={style.logoWrapper}>
                    <img className={style.logo} src="/icons/Logitech_logo.svg" alt="Logitech Logo" />
                </h2>
                <ul className={style.cartWrapper}>
                    <li className={style.cartSearch}><img className={style.icon} src="/icons/cart-g.svg" alt="Cart Icon" /></li>
                    <li className={style.cartSearch}><img className={style.icon} src="/icons/search-g.svg" alt="Search Icon" /></li>
                </ul>
            </div>
        </nav>
    )
}