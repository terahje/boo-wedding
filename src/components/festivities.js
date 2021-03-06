import React from 'react'
import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const festivities = () => {
    return (
        <section id="festPage">
            <div className="backBtn">
                <Link to="/">
                    <FontAwesomeIcon icon={['fas', 'hand-point-left']}/> Back to Home
                </Link>
             </div>

            <div className="festContainer">
                <div className="festMain">
                    <h1>Ruve & Terahje's Wedding</h1>
                        <div className="festTime">
                            <h4>September 25, 2021</h4>
                            <h4>2649 E. 6th St. <br/>
                                Tucson, AZ 85716</h4>
                        </div>
                    <div className="festFull">
                        <div className="festTimeLeft">
                            <h3>4:15 PM</h3>
                            <h3>5:00 PM</h3>
                            <h3>5:25 PM</h3>
                            <h3>6:30 PM</h3>
                            <h3>7:00 PM</h3>
                        </div>
                        <div className="festDescRight">
                            <h3>Guest Arrive</h3>
                            <h3>Ceremony</h3>
                            <h3>Cocktail Hour</h3>
                            <h3>Buffet Dinner</h3>
                            <h3>Dancing,<br/>Photobooth,<br/>Yard Games</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default festivities
