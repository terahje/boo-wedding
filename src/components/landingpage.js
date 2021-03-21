import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import FlipCountdown from '@rumess/react-flip-countdown';

class Landing extends Component {
    render() {
        return(
            <section id="landing">

            <Grid className="">
                <Cell col={4}>
                <FlipCountdown
                  hideYear
                  hideHour
                  hideMinute
                  hideSecond
                size='medium' // Options (Default: medium): large, medium, small, extra-small.
                className="countdown"
                endAt={'2021-09-25 17:00:00'} // Date/Time
            />
                </Cell>
                <Cell col={4}>
                 
                </Cell>
                <Cell col={4}>
                 
                </Cell>
            </Grid>
            <Grid className="">
                <Cell col={4}>
                 
                </Cell>
                <Cell col={4}>
                 
                </Cell>
                <Cell col={4}>
                 
                </Cell>
            </Grid>
            <Grid className="landing-grid">
                <Cell col={1}>
                 
                </Cell>
                <Cell col={10}>
                <div className="banner-text" style={{ textAlign: 'center' }}>
                    <h3 className="wedDate" style={{ fontFamily: 'Martel, serif'}}>
                        09.25.21
                        </h3>
                    <h1>Ruve & Terahje</h1>
                    <h3 style={{ fontFamily: 'Martel, serif'}}>
                    Are Getting Married!

                    </h3>

                    {/* <hr/> */}
                </div>
                </Cell>
                <Cell col={1}>
                 
                </Cell>
            </Grid>
            <div className="footerSpacer">
            </div>
        </section>
       
        )
    }

}

export default Landing;