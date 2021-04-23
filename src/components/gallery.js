import React from 'react'
import { Link } from "react-router-dom"
import RnThugview from '../assets/images/R&Thugview.jpg'
import RnTtreehug from '../assets/images/R&TtreeHug.jpg'
import RnTboohug from '../assets/images/R&TbooHug.jpg'
import RnTsunset from '../assets/images/R&Tsunset.jpg'
import RnTView2get from '../assets/images/R&Tview2get.jpg'
import RnTHoldH from '../assets/images/R&TholdHands.jpg'
import RnTgaze from '../assets/images/R&Tgaze.jpg'
import RnToffGaze from '../assets/images/R&ToffGaze.jpg'
import RnTthrowback from '../assets/images/R&Tthrowback.jpg'
import RnTcostaR from '../assets/images/R&TcostaR.jpg'
import RnTnyc from '../assets/images/R&Tnyc.jpg'
import RnTgum from '../assets/images/R&Tgum.jpg'
import RnTvegas from '../assets/images/R&Tvegas.jpg'
import RnTwedSea from '../assets/images/R&TweddingSea.jpg'
import RnTxmasTree from '../assets/images/R&TxmasTree.jpg'
import Carousel from 'react-bootstrap/Carousel';
import GalLeft from '../components/galleryLeft'

const gallery = () => {
    return (
        <section id="galleryPage">
            <div className="backBtn">
                <Link to="/">
                ← Back to Home
                </Link>
             </div>
             <div id="fullGalPage">
                 <GalLeft/>           
                <div className="galRight">
                    <div className="galDesc">
                        <h1>Gallery</h1>
                        
                            <p>Our Gallery is a curatation of pictures collected over the years we've spent together.  
                            The groom's Best Friend/ Best Man, Devan Cobb, provided the couple's stunning engagement photos.  
                            The couple has also included photos from their adventures over the years.  They can't wait to share 
                            this day with you all and to add more pictures as we celebrate together. See you all soon!</p>
                            <br/>
                            <h6>For prints of our enagement photos, click <a href="https://devanmichaelphotography.pixieset.com/ruveandterahje/" target="_blank">here</a>.</h6>
                            <h5>Love,</h5><br/>
                            <h3>Ruve & Terahje</h3> 
                    </div>
                    <div className="galHorzRight">
                        <Carousel fade>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTtreehug}
                                    alt="First slide"
                                    />
                                    
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnThugview}
                                    alt="Second slide"
                                    />

                                    
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTboohug}
                                    alt="Third slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTsunset}
                                    alt="Forth slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTHoldH}
                                    alt="Fifth slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTView2get}
                                    alt="Sixth slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTgaze}
                                    alt="Seventh slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnToffGaze}
                                    alt="Eighth slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTcostaR}
                                    alt="Ninth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTnyc}
                                    alt="tenth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTgum}
                                    alt="11th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTvegas}
                                    alt="12th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTwedSea}
                                    alt="13th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTxmasTree}
                                    alt="14th slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTthrowback}
                                    alt="15th slide"
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default gallery
