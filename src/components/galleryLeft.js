import React from 'react'
import RnTringshot from '../assets/images/R&Tringshot.jpg'
import RnTspin from '../assets/images/R&Tspin.jpg'
import RnTspin2 from '../assets/images/R&Tspin2.jpg'
import RnTspin3 from '../assets/images/R&Tspin3.jpg'
import RnTspin4 from '../assets/images/R&Tspin4.jpg'
import RnTruHug from '../assets/images/R&TruHug.jpg'
import RnTbooLook from '../assets/images/R&TbooLook.jpg'
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
                            </Carousel>
                        </div>
                    </div>
                </section>
    )
}

export default galleryLeft
