import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
        <div className="app-container">
            <Navbar />
            {children}</div>
            <Footer />
        </>
    )
}

export default Layout