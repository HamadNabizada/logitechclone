import style from '../styles/Navbar.module.css'
import { useState, useEffect, useRef } from 'react'

export default function Navbar(){
    let [iconHoverCart, setIconHoverCart] = useState(false)
    let [iconHoverSearch, setIconHoverSearch] = useState(false)
    let [menuHover, setMenuHover] = useState(false)
    let [isNavbarOpen, setIsNavbarOpen] = useState(false)
    let lastScroll = useRef(0)
    let subNavbar = useRef()

    function iconIsHoverCart(){
        setIconHoverCart(true)
    }
    function iconIsNotHoverCart(){
        setIconHoverCart(false)
    }
    function iconIsHoverSearch(){
        setIconHoverSearch(true)
    }
    function iconIsNotHoverSearch(){
        setIconHoverSearch(false)
    }
    function toggleNavbar(){
        setIsNavbarOpen(prevIsNavbarOpen => !prevIsNavbarOpen)
        console.log(isNavbarOpen);
    }
    function menuIsHovered(){
        setMenuHover(true)
    }
    function menuIsNotHovered(){
        setMenuHover(false)
    }
    let menuHoveredStyles = menuHover ? `${style.menuLine} ${style.menuLineWhite}` : style.menuLine
    let menuButtonStyles = {
        hamburgerMenu : isNavbarOpen ? style.menuBtnWrapperOpen : style.menuBtnWrapper,
        hamburgerMenuTopLines : isNavbarOpen ? `${menuHoveredStyles} ${style.menuTopLine}`: menuHoveredStyles,
        hamburgerMenuMiddleLines : isNavbarOpen ? `${menuHoveredStyles} ${style.menuMiddleLine}`: menuHoveredStyles,
        hamburgerMenuBottomLines : isNavbarOpen ? `${menuHoveredStyles} ${style.menuBottomLine}`: menuHoveredStyles
    }
    let iconDisplay = {
        cart: iconHoverCart ? "/icons/cart-w.svg" : "/icons/cart-g.svg",
        search: iconHoverSearch ? "/icons/search-w.svg" : "/icons/search-g.svg",
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    },[])

    function handleScroll(){
        let currentScroll = window.pageYOffset
        if(currentScroll < lastScroll.current){
            subNavbar.current.className = style.navbarSubTop
        }
        if(currentScroll === 0){
            subNavbar.current.className = style.navbarSub
        }
        if(currentScroll > lastScroll.current && currentScroll > 185){
            subNavbar.current.className = style.navbarSubHidden
        }
        
        lastScroll.current = currentScroll
    }
    return(
        <nav className={style.navbarMainWrapper}>
            <section className={style.allNav}></section>
            <div ref={subNavbar} className={style.navbarSub}>
                <div onClick={toggleNavbar} onMouseEnter={menuIsHovered} onMouseLeave={menuIsNotHovered} className={menuButtonStyles.hamburgerMenu}>
                    <div className={menuButtonStyles.hamburgerMenuTopLines}></div>
                    <div className={menuButtonStyles.hamburgerMenuMiddleLines}></div>
                    <div className={menuButtonStyles.hamburgerMenuBottomLines}></div>
                </div>
                <h2 className={style.logoWrapper}>
                    <img className={style.logo} src="/icons/Logitech_logo-w.svg" alt="Logitech Logo" />
                </h2>
                <ul className={style.cartWrapper}>
                    <li onMouseEnter={iconIsHoverCart} onMouseLeave={iconIsNotHoverCart} className={style.cartSearch}><img className={style.icon} src={iconDisplay.cart} alt="Cart Icon" /></li>
                    <li onMouseEnter={iconIsHoverSearch} onMouseLeave={iconIsNotHoverSearch} className={style.cartSearch}><img className={style.icon} src={iconDisplay.search} alt="Search Icon" /></li>
                </ul>
            </div>
        </nav>
    )
}