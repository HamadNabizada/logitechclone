import Header from '../components/Header'
import style from '../styles/Index.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BaseCrousel from '../components/BaseCarousel'

export default function Index() {

  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <Hero />
      <BaseCrousel />
    </div>
  )
}
