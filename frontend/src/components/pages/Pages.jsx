import React from "react"
import Header from "../common/header/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Detail from "../detail/Detail"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pages = () => {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/:id' component={Detail}/>
            </Switch>
            <Footer/>
            <ToastContainer />
        </Router>
    )
}

export default Pages
