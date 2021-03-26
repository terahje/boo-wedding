import React from 'react'
import { Link } from "react-router-dom"
import Venue from '../assets/images/venue.jpg'
import GoogleApiWrapper from '../components/googleMap'

const venue = () => {
    return (
        <section id="venuePage">
            <div className="backBtn">
                <Link to="/">
                ← Back to Home
                </Link>
             </div>
             
             <section id="venueCon">
                 <div className="venTitle">
                    <h1>Venue</h1>
                 </div>
                 <div className="venHero">
                    <img src={Venue} alt="Ruve and Terahje" style={{ alignSelf: 'center'}}/>
                 </div>

                 

                 <section id="venDesc">
                    <section id="googleMaps">
                                            <GoogleApiWrapper></GoogleApiWrapper>
                                        </section>
                 
                    <div className="venWords">
                     <div className="venDescTitle">
                         <h4>We're happy to be going with:</h4>
                         <h1>Amore Events Tucson</h1>
                     </div>
                     
                     <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia numquam dolorum veniam debitis aperiam illum fugit expedita! 
                     Laborum eaque quibusdam culpa! Vel rerum assumenda veniam esse perspiciatis voluptatibus ut cum quae? Ex, magnam dolore saepe repellat 
                     necessitatibus officiis itaque vero fugit nulla illum nemo, eveniet esse enim id. Recusandae nihil voluptate omnis soluta nisi, fuga illo 
                     doloribus consequatur neque non commodi ad expedita velit suscipit porro, aspernatur sit adipisci! Iure neque rerum laboriosam impedit quis 
                     sunt hic delectus eum.
                     </p>
                     </div>
                 </section>
             </section>
            
        </section>
    )
}

export default venue
