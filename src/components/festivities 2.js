import React from 'react'
import { Link } from "react-router-dom"
// import ourPic from '../assets/images/R&Tovershoulder.jpg'

const festivities = () => {
    return (
        <section id="festPage">
            <div className="backBtn">
                <Link to="/">
                ← Back to Home
                </Link>
             </div>

            <div className="festContainer">
                <div className="festMain">
                    <h1>Ruve & Terahje's Wedding</h1>
                    <h4>September 25, 2021</h4>
                    <div className="festFull">
                        <div className="festTimeLeft">
                            <h3>5:00 PM</h3>
                            <h3>5:30 PM</h3>
                            <h3>6:00 PM</h3>
                            <h3>7:00 PM</h3>
                        </div>
                        <div className="festDescRight">
                            <h3>Cermony</h3>
                            <h3>Cocktail Hour</h3>
                            <h3>Buffet Dinner</h3>
                            <h3>Dancing, Photobooth, Yard Games</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default festivities
