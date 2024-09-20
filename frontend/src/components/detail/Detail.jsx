import React, {useEffect, useState} from "react"
import './detail.css'
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(`http://127.0.0.1:8000/blogjon/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="detail">
            {loading ? (
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="detail-main">
                    <img className="detail-image" src={`http://127.0.0.1:8000${product.image}`} alt="detail"/>
                    <div className="detail-content">
                        <h1>{product.title}</h1>

                        <p>{product.about}</p>

                        <h3>{product.price}₽</h3>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Detail
