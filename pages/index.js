import Header from '../components/Header'
import style from '../styles/Index.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BaseCrousel from '../components/BaseCarousel'
import products from '../components/productData.js'

export default function Index() {

  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <Hero />
      <BaseCrousel 
        title = 'RECOMMENDED FOR YOU'
        BGColor = '#2f3132'
        innerBGColor = 'white'
        textColor = 'white'
        productData = {products}
        numOfProducts = '3'
      />
      <BaseCrousel 
        title = 'ADVANCED GAMING GEAR'
        description = 'Play at your peak with the highest performance gaming equipment from Logitech G.'
        BGColor = 'white'
        innerBGColor = '#3a3a3a'
        textColor = 'black'
        productData = {products}
        numOfProducts = '4'
      />
    </div>
  )
}
