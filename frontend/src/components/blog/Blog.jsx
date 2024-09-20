import React, {useEffect} from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/services.jpg"

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <section className='blog-out mb'>
                <Back name='Продукты' title='Наши продукты' cover={img}/>
                <div className='container recent'>
                    <RecentCard/>
                </div>
            </section>
        </>
    )
}

export default Blog
