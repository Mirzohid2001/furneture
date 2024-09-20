import React, { useEffect } from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <section className='about'>
        <Back name='О нас' title='О нас - Кто мы?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title="Освежите ваш интерьер с нами!" />
            <p>
              Приветствуем вас на сайте, где мечты о вашем идеальном доме становятся реальностью. Наш мебельный портал
              - это не просто магазин, это место, где каждая деталь, каждая текстура и каждый уголок вдохновлены вашим
              стилем жизни. От современного минимализма до классического уюта, мы предлагаем широкий ассортимент мебели,
              чтобы ваш дом отражал вашу уникальность и комфорт. Погрузитесь в мир изысканных дизайнов и функциональности,
              оставайтесь с нами, чтобы превратить ваше пространство в истинный дом.
            </p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
