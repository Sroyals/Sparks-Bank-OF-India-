import React from 'react'
import '../styles/home.css'
import image from '../images/bank.png'
import { Redirect } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div className="left">
                <div className="title">
                    <h2>Sparks Bank of India</h2>
                </div>
                <div className="desc">
                    <p>Welcome to our Sparks Bank of India website! We are a reliable and customer-focused financial institution that provides a range of banking services to meet your financial needs. Our website is designed to provide you with easy access to information about our products and services. You can explore our website to learn more about our offerings, access your account information, and easily contact us if you have any questions or concerns.

Thank you for choosing Sparks Bank of India as your trusted financial partner. We look forward to serving you!</p>
                </div>
                <button className='start-btn'>
                    <a href="/allCustomers">
                        Get Started
                    </a>
                </button>
                <div className="gradient-border ">
                    <p>Transactions done : 106824</p>
                </div>
            </div>
            <div className="right">
                <img src={image} alt="Bank img" />
            </div>
        </div>
    )
}

export default Home