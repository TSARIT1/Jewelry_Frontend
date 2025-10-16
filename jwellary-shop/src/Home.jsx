import React from 'react'
import './App.css';
import Header from './Header';
// import Slider from 'react-slick';
import Myslider from './Myslider'
import Price from './Price';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Features from './Features';
import Login from './Login'
function App() {
    return (
        <div>
            {/* <Header/> */}
            <Myslider />
            <Price />
            <Features />
            <Testimonials />
            {/* <Footer/> */}

        </div>
    )
}

export default App
