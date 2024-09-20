import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const RecentCard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        axios.get("http://127.0.0.1:8000/blog/")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='content grid3 mtop'>
                {products.map((product) => (
                        <Link to={`/${product.id}`} className='box shadow cart' key={product.id}>
                            <div className='img'>
                                <img src={product.image} alt='furniture'/>
                            </div>
                            <div className='text'>
                                <h4>{product.title}</h4>
                                <p>{product.price} ₽</p>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </>
    )
}

export default RecentCard
