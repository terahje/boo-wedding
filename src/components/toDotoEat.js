import React from 'react'
import { Link } from 'react-router-dom'
import sabCan from '../assets/images/sabCan.jpg'
import FthAve from '../assets/images/4thAve.jpg'
import aMount from '../assets/images/aMount.jpg'

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
                            For all of our guess coming from out of state, Welcome to Tucson!  If you've never been here before I know 
                            what your thinkg, what is there to do in Tucson.  Most of our favorite things to here revolve around being 
                            outside.  Whether you want to explore the desert through Sabino Canyon or take in the full city view atop the 
                            winding road of Mt. Lemmon, Tucson is full of wonderful surprises. For those looking for a little more excitement, 
                            Downtown, 4th Ave, and places such as Top Golf have everything your looking for in a night in Tucson.   
                        </p> 

                    
                        <div className="toDo-container">
                            <div className="doing" style={{ backgroundImage: `url(${sabCan})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                <h3><a href="https://www.fs.usda.gov/recarea/coronado/recarea/?recid=80532" target="_blank">Sabino Canyon</a></h3>
                                </div>
                            <div className="doing" style={{ backgroundImage: `url(${FthAve})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                <h3><a href="https://fourthavenue.org/" target="_blank">Historic 4th Ave</a></h3>
                                </div>
                            <div className="doing" style={{ backgroundImage: `url(${aMount})`, backgroundSize: 'cover', objectFit:'inherit'}}>
                                <h3><a href="https://www.tripadvisor.com/Attraction_Review-g60950-d524680-Reviews-A_Mountain_Sentinel_Peak-Tucson_Arizona.html" target="_blank">
                                    "A" Mountain</a></h3>
                                </div>
            
                        </div>
                    </div>
                </div>
             </section>

             <section id="toEatSection">
             <div className="toEatDiv">
                    <h2>To Eat</h2>
                    <p>
                        For all of our guess coming from out of state, Welcome to Tucson!  If you've never been here before I know 
                        what your thinkg, what is there to do in Tucson.  Most of our favorite things to here revolve around being 
                        outside.  Whether you want to explore the desert through Sabino Canyon or take in the full city view atop the 
                        winding road of Mt. Lemmon, Tucson is full of wonderful surprises. For those looking for a little more excitement, 
                        Downtown, 4th Ave, and places such as Top Golf have everything your looking for in a night in Tucson.   
                    </p> 

                    
                </div>

             </section>
            <div className="doEatContainer">
                <div className="doEatMain">
                    <h2>For Our Out-of-State Visitors:</h2>
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
                                    <li>Shopping:&nbsp; 
                                        <a href="https://www.laencantadashoppingcenter.com/" target="_blank" >
                                            La Encantada</a> & &nbsp; 
                                            <a href="https://www.parkplacemall.com/en.html" target="_blank">
                                                Park Place Mall</a></li>
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
    )
}

export default toDotoEat
