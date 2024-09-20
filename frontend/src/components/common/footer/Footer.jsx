import React from "react"
import {footer} from "../../data/Data"
import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    {footer.text.map((items) => (
                        <Link className="footer-link" to={items.path} key={items.text}>{items.text}</Link>
                    ))}
                </div>
            </footer>
            <div className='legal'>
                <span>
                    © 2024 ООО ПАНДА ХОУМ. Powered by
                    <a
                        href="https://t.me/rakhmatov1ch"
                        target="_blank"
                        rel="noreferrer">Monday
                    </a>
                .
                </span>
            </div>
        </>
    )
}

export default Footer
