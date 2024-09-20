import React, {useEffect, useState} from "react"
import {featured} from "../../data/Data"
import axios from "axios";

const FeaturedCard = () => {
    const [features, setFeatures] = useState([])

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        axios.get("http://127.0.0.1:8000/price/")
            .then(res => setFeatures(res.data))
            .catch(err => console.log(err))
    }
    console.log(features)

    return (
        <>
            <div className='content mtop'>
                {features.map((items) => (
                    <div className='feature' key={items.id}>
                        <h3>{items.name}</h3>
                        <div className="line"></div>
                        <h4>{items.price}₽</h4>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeaturedCard
