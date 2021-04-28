import React from 'react'
import { Link } from "react-router-dom"
import Venue from '../assets/images/venue.jpg'
import GoogleApiWrapper from '../components/googleMap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const venue = () => {
    return (
        <section id="venuePage">
            <div className="backBtn">
                <Link to="/">
                    <FontAwesomeIcon icon={['fas', 'hand-point-left']}/> Back to Home
                </Link>
             </div>
             
             <section id="venueCon">
                 <div className="venTitle">
                    <h1>Venue</h1>
                 </div>
                 <div className="venHero">
                    <img src={Venue} alt="Ruve and Terahje" style={{ alignSelf: 'center', height: '100%', width: '100%'}}/>
                 </div>

                 

                 <section id="venDesc">
                    <section id="googleMaps">
                                            <GoogleApiWrapper></GoogleApiWrapper>
                                        </section>
                 
                    <div className="venWords">
                     <div className="venDescTitle">
                         <h4>We're happy to be going with:</h4>
                         <h1 className="shimmer">Amore Events Tucson</h1>
                     </div>
                     
                     <p>
                     Due to the pandemic, the couple has choosen Amore Events to provide a more intimate gathering.  
                     The mother-daughter team at Amore Events are long time friends of the bride.  This is a private 
                     house converted into a venue that accomadates smaller weddings.  Both ceremony and reception will 
                     be taking place at this location.  For more information about the venue, <a href="https://www.theknot.com/marketplace/amore-events-tucson-tucson-az-2033104" target="_blank">
                     click here.</a>  
                     </p>
                     <p>
                     Please click on the address below for directions. Parking is limited so uber/lyft/carpool is recommended.  
                     </p>
                     <h4><a href="https://goo.gl/maps/a3GoBFJCNyAteZVc7" target="_blank">
                        2649 E. 6th St. <br/>
                        Tucson, AZ 85716</a></h4>
                     </div>
                 </section>
             </section>
            
        </section>
    )
}

export default venue
