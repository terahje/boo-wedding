import React from 'react'
import RnTringshot from '../assets/images/R&Tringshot.jpg'
import RnTspin from '../assets/images/R&Tspin.jpg'
import RnTspin2 from '../assets/images/R&Tspin2.jpg'
import RnTspin3 from '../assets/images/R&Tspin3.jpg'
import RnTspin4 from '../assets/images/R&Tspin4.jpg'
import RnTruHug from '../assets/images/R&TruHug.jpg'
import RnTbooLook from '../assets/images/R&TbooLook.jpg'
import RnTbday from '../assets/images/R&Tbirthday.jpg'
import RnTGC from '../assets/images/R&TgrandC.jpg'
import RnTdevilB from '../assets/images/R&TdevilB.jpg'
import RnTcostaPar from '../assets/images/R&TcostaParrot.jpg'
import RGC from '../assets/images/RgrandCan.jpg'
import RnTringXmas from '../assets/images/R&TringXmas.jpg'
import RnTroadTrip from '../assets/images/R&TthrowbackTrip.jpg'
import RnTbooVegas from '../assets/images/R&TbooVegas.jpg'
import Carousel from 'react-bootstrap/Carousel';

const galleryLeft = () => {
    return (
        <section id="carouselLeft">
            <div className="galTallLeft">
                        <div id="carouselLeft">
                            <Carousel fade style={{width: '65vh'}}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTspin}
                                    alt="First slide"
                                    />   
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTspin2}
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTspin3}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTspin4}
                                    alt="Forth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTringshot}
                                    alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTruHug}
                                    alt="Sixth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTbooLook}
                                    alt="Seventh slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTbday}
                                    alt="Eighth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTGC}
                                    alt="Ninth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTdevilB}
                                    alt="Tenth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RGC}
                                    alt="11th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTcostaPar}
                                    alt="12th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTbooVegas}
                                    alt="13th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTroadTrip}
                                    alt="14th slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={RnTringXmas}
                                    alt="15th slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </section>
    )
}

export default galleryLeft
