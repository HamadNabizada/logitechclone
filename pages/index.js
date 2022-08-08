import Header from '../components/Header'
import style from '../styles/Index.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Index() {

  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
      <Hero />
    </div>
  )
}
