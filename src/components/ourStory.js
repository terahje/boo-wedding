import React from 'react'
import { Link } from "react-router-dom"
import ourPic from '../assets/images/R&Tovershoulder.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ourStory = () => {
    return (
        <section id = "ourStory">
             <div className="backBtn">
                <Link to="/">
                    <FontAwesomeIcon icon={['fas', 'hand-point-left']}/> Back to Home
                </Link>
             </div>
            <div className="fullStory">
                <div className="left__card">
                    <img src={ourPic} alt="Ruve and Terahje" style={{maxHeight: '100vh', maxWidth: '100%', alignSelf: 'center'}}/>
                    <h3 className="yeQuote">
                        'I would find you in any lifetime..'
                        <br/>
                        - Kanye West
                    </h3>
                </div>
                <div className="right__card">
                    <h1>
                        Our Story
                    </h1>
                    <div className="days">
                        <h4>The First Day...</h4>
                        <h6>September 25, 2015</h6>
                        <p>
                        After matching online, their first date was at Frankie’s for Philadelphia cheesesteaks. Terahje chose a restaurant to test 
                        Ruve’s willingness to eat a messy meal. She passed the test and ordered a Philly cheesesteak with Wiz cheese (just how native 
                        Pennsylvanians order it)! They spent hours getting to know each other. Little did they know that we would spend almost every 
                        waking moment together after that. That was the first day of their forever. 
                        </p>
                    </div>
                    <div className="days">
                        <h4>The Yes Day...</h4>
                        <h6>December 14, 2019</h6>
                        <p>
                        Over the years, Terahje would like to surprise Ruve with date nights, often giving as little detail as possible to maintain 
                        the surprise.  This day was no different, he planned a secret trip to Mount Lemmon. With the ring in his pocket, the plan 
                        was to propose at sunset.  The nerves grew as they watched the sun set atop Windy Vista. Eventually, Ruve wanted to leave due 
                        to the cold. As soon as they stood up, another family came over to ask them to take a picture.  In return, the family took a 
                        picture of the couple. As the sun set and with the lady in place, he took a knee and brought out the ring.  The surprise on 
                        Ruve’s face and the shriek from the lady was a moment he’ll remember forever.  
                        </p>
                    </div>
                    <div className="days">
                        <h4>The Best Day...</h4>
                        <h6>September 25, 2021</h6>
                        <p>
                        The Best Day of our young lives, sharing our love with those who taught us how to love.  A new chapter in our lives we’re so 
                        excited about and thank you all so much for contributing to the prosperity of our marriage.  The day Terahje and Ruve became 
                        the Gratkowski’s.  
                        </p>
                    </div>
                  
                </div>

                
            </div>
        </section>
    )
}

export default ourStory
