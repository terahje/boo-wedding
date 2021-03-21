import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import regPic from '../assets/images/R&Thugs.jpg'

const registry = () => {
    return (
        <section id="registryPage">
            <div className="backBtn">
                <Link to="/">
                ← Back to Home
                </Link>
             </div>
            <div className="regContainer">
                <div className="regMain">
                    <h1>The Couple is Registered at</h1>
                    <div className="iconsLinks">
                        <a href="https://www.amazon.com/wedding/terahje-gratkowski-ruve-geyler--september-2021/registry/3472Z5H8ED8SW" target="_blank">
                           <FontAwesomeIcon icon={["fab", "amazon"]} size="2x"/> Amazon
                        </a>

                        <a href="https://www.crateandbarrel.com/gift-registry/ruve-geyler-and-terahje-gratkowski/r6254854" target="_blank">
                           <FontAwesomeIcon icon={["fas", "tag"]} size="2x" /> Crate & Barrel
                        </a>
                    </div>

                    <div className="regP">
                        <h4>Or if you don't want to go through those online websites, we will have a Card Box 
                        for any other contributions.  We want to thank you in advance for love you shared with 
                        us, and helping us get a jump start on our future. 
                        </h4>
                    </div>
                    <img src={regPic} alt="Ruve and Terahje" style={{height: '39vh', maxWidth: '75%', alignSelf: 'center'}}/>
                </div>
            </div>
            
        </section>
    )
}

export default registry
