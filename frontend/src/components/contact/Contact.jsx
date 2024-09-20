import React, { useEffect, useState } from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import axios from "axios";
import { toast } from "react-toastify"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/contact/", {
            name,
            email,
            phone,
            message,
        })
            .then(() => {
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                toast.success('мы получили заявление')
            })
    }

    return (
        <section className='contact mb'>
            <Back name='Связаться с нами' title='Получите помощь и дружескую поддержку' cover={img} />
            <div className='container'>
                <form className='shadow' onSubmit={handleSubmit}>
                    <h4>Заполните форму</h4> <br />

                    <input
                        type='text'
                        placeholder='Имя'
                        required
                        value={name}
                        onInput={e => setName(e.target.value)}
                    />

                    <input
                        type='email'
                        placeholder='Электронная почта'
                        required
                        value={email}
                        onInput={e => setEmail(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='Номер телефона'
                        required
                        value={phone}
                        onInput={e => setPhone(e.target.value)}
                    />

                    <textarea
                        cols='30'
                        rows='5'
                        value={message}
                        placeholder="Ваше сообщение"
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>

                    <button>Отправить запрос</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
