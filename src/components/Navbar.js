import React from 'react'
import pic from '../images/logo.png'
import '../App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logoImage">
                <img src={pic} alt="ToDoApp Logo"/>
            </div>
            <div className="navLinks">
                <Router>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                    </ul>
                </Router>
            </div>
        </div>
    )
}
export default Navbar