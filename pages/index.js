import Header from '../components/Header'
import style from '../styles/Index.module.css'
import Navbar from '../components/Navbar'

export default function Index() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Navbar />
    </div>
  )
}
