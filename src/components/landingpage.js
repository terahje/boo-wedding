import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import FlipCountdown from '@rumess/react-flip-countdown';

class Landing extends Component {
    render() {
        return(
            <section id="landing" >
                <section id="landingFull">
                    <div className="flipCount">
                        <FlipCountdown
                        hideYear
                        hideHour
                        hideMinute
                        hideSecond
                        size='medium' // Options (Default: medium): large, medium, small, extra-small.
                        className="countdown"
                        endAt={'2021-09-25 17:00:00'} // Date/Time
                    />
                    </div>
                    <section id="landingCon">
                            <div className="landingMain">
                                <h3 className="wedDate">
                                    09.25.21
                                    </h3>
                                <h1>Ruve & Terahje</h1>
                                <h3>
                                Are Getting Married!

                                </h3>

                                {/* <hr/> */}
                            </div>
                        
                    </section>
                
                </section>

            </section>
       
        )
    }

}

export default Landing;