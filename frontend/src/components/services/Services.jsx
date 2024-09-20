import React, { useEffect } from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Heading from "../common/Heading";
import Overdrawing from "./Overdrawing"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <section className='services mb'>
        <Back name='Услуги' title='Все услуги' cover={img} />
        <div className='featured container'>
          <Heading title={"Наименование работ и цены"} />
          <FeaturedCard />
        </div>
        <div className='container'>
          <Heading title='Последняя мебель в списке'  />
          <Overdrawing />
        </div>
      </section>
    </>
  )
}

export default Services
