import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logo from "../../data/logo.jpeg"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <Link to='/' className='logo'>
            <img src={logo} alt='' />
          </Link>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index} onClick={() => navList && setNavList(!navList)}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
