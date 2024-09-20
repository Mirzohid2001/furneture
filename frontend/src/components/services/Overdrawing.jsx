import React, { useEffect, useState } from "react"
import axios from "axios";

const Overdrawing = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        axios.get("http://127.0.0.1:8000/overdrawing/")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }
    console.log(products);

    return (
        <div className='content grid3 mtop'>
            {products.map((product) => (
                <div className='box shadow cart' key={product.id}>
                    <div className='img'>
                        <img src={product.img} alt='furniture' />
                    </div>
                    <div className='text' style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                        <h4>{product.text}</h4>
                        <p style={{fontSize: 20, color: 'brown'}}>Материал: {product.material}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Overdrawing
