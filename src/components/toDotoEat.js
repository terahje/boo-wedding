import React from 'react'
import { Link } from 'react-router-dom'
import sabCan from '../assets/images/sabCan.jpg'
import FthAve from '../assets/images/4thAve.jpg'
import aMount from '../assets/images/aMount.jpg'
import burro from '../assets/images/burro-small.jpg'
import canes from '../assets/images/canes.jpg'
import guadSalsa from '../assets/images/guadSalsa.jpg'

const toDotoEat = () => {
    return (
        <section id="toDotoEat">
             <section id="toDotoEatPage">
                <div className="backBtn">
                    <Link to="/">
                    ← Back to Home
                    </Link>
                </div>

                <div className="welcome">
                    <h1>Welcome To Tucson!</h1>
                </div>

             </section>

             <section id="toDoSection">
                 <div className="toDoDiv">
                    <div className="toDoImgs">
                        <h2>To Do</h2>
                        <p>
                            For all of our guests coming from out of state, Welcome to Tucson!  If you've never been here before we know 
                            what your thinking, what is there to do in Tucson?  Most of our favorite things to do revolve around being 
                            outside.  Whether you want to explore the desert through Sabino Canyon or take in the full city view atop the 
                            winding road of Mt. Lemmon, Tucson is full of wonderful surprises. For those looking for a little more excitement, 
                            Downtown, 4th Ave, and places such as Top Golf have everything your looking for in Tucson.   
                        </p> 

                    
                        <div className="toDo-container">
                            <a href="https://www.fs.usda.gov/recarea/coronado/recarea/?recid=80532" target="_blank">
                                <div className="doing" style={{ backgroundImage: `url(${sabCan})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                    <h3><a href="https://www.fs.usda.gov/recarea/coronado/recarea/?recid=80532" target="_blank">Sabino Canyon</a></h3>
                                    </div></a>
                            <a href="https://fourthavenue.org/" target="_blank">
                                <div className="doing" style={{ backgroundImage: `url(${FthAve})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                    <h3><a href="https://fourthavenue.org/" target="_blank">Historic 4th Ave</a></h3>
                                    </div></a>
                            <a href="https://www.tripadvisor.com/Attraction_Review-g60950-d524680-Reviews-A_Mountain_Sentinel_Peak-Tucson_Arizona.html" target="_blank">
                                <div className="doing" style={{ backgroundImage: `url(${aMount})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                    <h3><a href="https://www.tripadvisor.com/Attraction_Review-g60950-d524680-Reviews-A_Mountain_Sentinel_Peak-Tucson_Arizona.html" target="_blank">
                                        "A" Mountain</a></h3>
                                    </div></a>
            
                        </div>
                    </div>
                </div>
             </section>

             <section id="toEatSection">
             <div className="toEatDiv">
                    <h2>To Eat</h2>
                    <p>
                        Now we're talking!  For all the food lovers coming, Tucson may have TOO many options to pick from.  To help narrow 
                        down your search from the numerous options, or maybe expand to something new, we've listed some of our favorites below.  
                        We emplore you to try the local mexican resturants either dining in or take out.  Our top choices 
                        for dining out would be <em>BK Carne Asada & Hot Dogs</em> or <em>El Guero Canelo</em>.  Their Carne Asada is a must try.  
                        With dine in options slowing coming back, our top choices our <em>Guadalajara</em>, <em>Poco y Moms</em>, and <em>El Charro Café</em>.  
                        And, if there is any more room left in your wooden leg 😉, the fast food options are endless!  Just driving around you will 
                        most likely find your favorite, but some things to try that aren't in Pennsylvania include <em>Raising Canes</em>, and <em>In-n-Out</em>.  
                        Raising Canes is easily one of our places to go, and we assure you the food in Tucson may be your favorite part of this trip.  
                        Its ok, we understand. 😁
                    </p> 

                    <div className="toEat-container">
                            <a href="https://www.bktacos.com/" target="_blank">
                            <div className="doing" style={{ backgroundImage: `url(${burro})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                <h3><a href="https://www.bktacos.com/" target="_blank">
                                    BK Carne Asada & Hot Dogs</a></h3>
                                </div></a>
                            <a href="https://www.raisingcanes.com/location/arizona/tucson/broadway" target="_blank">
                                <div className="doing" style={{ backgroundImage: `url(${canes})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                <h3><a href="https://www.raisingcanes.com/location/arizona/tucson/broadway" target="_blank">
                                    Raising Canes</a></h3>
                                </div></a>
                            <a href="https://www.guadalajaraoriginalgrill.com/" target="_blank">
                                <div className="doing" style={{ backgroundImage: `url(${guadSalsa})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                    <h3><a href="https://www.guadalajaraoriginalgrill.com/" target="_blank">
                                        Guadalajara Original Grill</a></h3>
                                    </div></a>
            
                        </div>

                    
                </div>

             </section>
             <section id="fullListLinks">
                <div className="doEatContainer">
                    <div className="doEatMain">
                        <h2>More Links to Consider:</h2>
                        <div className="doEatTable">
                            <div className="toDoLeft">
                                <h1>To Do</h1>
                                    <ul>
                                        <li>
                                            <a href="https://www.fs.usda.gov/recarea/coronado/recarea/?recid=80532" target="_blank">
                                                Sabino Canyon Hike</a></li>
                                        <li><a href="https://www.visitarizona.com/places/parks-monuments/mount-lemmon/" target="_blank">
                                            Mt Lemmon Sightseeing</a></li>
                                        <li>
                                            <a href="https://fourthavenue.org/" target="_blank">
                                            Downtown/ 4th Ave</a></li>
                                        <li>
                                            <a href="https://topgolf.com/us/tucson/" target="_blank">
                                            Top Golf</a></li>
                                        <li>
                                            <a href="https://www.tripadvisor.com/Attraction_Review-g60950-d524680-Reviews-A_Mountain_Sentinel_Peak-Tucson_Arizona.html" target="_blank">
                                            "A" Mountain</a></li>
                                        <li>
                                            <a href="https://www.laencantadashoppingcenter.com/" target="_blank" >
                                                La Encantada Mall</a>
                                                    </li>
                                        <li>
                                            <a href="https://www.borderlandsbrewing.com/" target="_blank" >
                                                Borderlands Brewing Co.</a>
                                                    </li>
                                        
                                    </ul>
                            </div>
                            <div className="toEatRight">
                                <h1>To Eat</h1>
                                    <ul>
                                        <li>
                                            <a href="https://www.culinarydropout.com/locations/tucson-az/" target="_blank">
                                                Culinary Dropout</a></li>
                                        <li>
                                            <a href="https://www.firstwatch.com/menu/" target="_blank">
                                                First Watch</a></li>
                                        <li>
                                            <a href="https://www.bktacos.com/" target="_blank">
                                                BK Carne Asada & Hot Dogs</a></li>
                                        <li>
                                            <a href="https://www.raisingcanes.com/location/arizona/tucson/broadway" target="_blank">
                                                Raising Canes</a></li>
                                        <li>
                                            <a href="https://locations.in-n-out.com/242-Tucson" target="_blank">
                                                In-n-Out</a></li>
                                        <li>
                                            <a href="https://www.guadalajaraoriginalgrill.com/" target="_blank" >
                                                Guadalajara Original Grill</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </section>
        </section>
    )
}

export default toDotoEat
