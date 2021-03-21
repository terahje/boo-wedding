import React from 'react'
import { Link } from "react-router-dom"
import ourPic from '../assets/images/R&Tovershoulder.jpg'

const ourStory = () => {
    return (
        <section id = "ourStory">
             <div className="backBtn">
                <Link to="/">
                ← Back to Home
                </Link>
             </div>
            <div className="fullStory">
                <div className="left__card">
                    <img src={ourPic} alt="Ruve and Terahje" style={{maxHeight: '200vh', maxWidth: '75%', alignSelf: 'center'}}/>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        </p>
                    </div>
                    <div className="days">
                        <h4>The Yes Day...</h4>
                        <h6>December 14, 2019</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        </p>
                    </div>
                    <div className="days">
                        <h4>The Best Day...</h4>
                        <h6>September 25, 2021</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores fuga perspiciatis consectetur similique iusto 
                        obcaecati ullam. Voluptatem ut nostrum fugiat omnis beatae inventore. 
                        Maiores laudantium, officia molestias temporibus sequi tempora.
                        </p>
                    </div>
                  
                </div>

                
            </div>
        </section>
    )
}

export default ourStory
