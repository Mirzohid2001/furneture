import React, { useEffect, useState } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import axios from "axios";

const Hero = () => {
    const [banner, setBanner] = useState(null)
    useEffect(() => {
        getBanner()
    }, [])
    const getBanner = () => {
        axios.get('http://127.0.0.1:8000/banner')
            .then(res => {
                const data = res.data
                setBanner(data[data.length - 1].img)
            })
    }

    return (
        <section className='hero' style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-cover">
                <div className='container'>
                    <Heading
                        title='Найдите мебель для себя и своих близких'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
