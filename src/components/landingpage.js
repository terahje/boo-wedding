import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import FlipCountdown from '@rumess/react-flip-countdown';

class Landing extends Component {
    render() {
        return(
            <div>
            {/* // <!-- Header --> */}
            <header id="Header" style={{backgroundColor: 'rgba(225, 225, 225, 0.2)'}}>
                
                    <h1>Ruve & Terahje</h1>
                    <h3>Are Getting Married!</h3>

                    <p>Thank you for stopping by our wedding page.  I, Terahje Gratkowski, will be building this page from 
                        scratch and should be completed shortly.  I want to share a piece of us with you since you all have 
                        been so pivotal in our lives.  While the site is being built, you can visit our registry page with 
                        the link at the bottom to get a head start, and please come back on/after March 31st for the final product.  
                    </p>
                    <button class="btn btn-success btn-lg"><a href="https://www.amazon.com/wedding/terahje-gratkowski-ruve-geyler--september-2021/registry/3472Z5H8ED8SW" target="_blank">Registry</a></button>

            </header>
            {/* // <!-- End of Header --> */}

             {/* <!-- Footer  --> */}
            
             <footer id="Footer">
                <p>All Rights Reserved <span>&copy;</span><b>Terahje</b> 2021</p>
            </footer>
            {/* <!-- End of Footer  --> */}
        
           </div>

            // previous landing page

        //     < >
        //     <Grid className="">
        //         <Cell col={4}>
        //         <FlipCountdown
        //           hideYear
        //           hideHour
        //           hideMinute
        //           hideSecond
        //         size='medium' // Options (Default: medium): large, medium, small, extra-small.
        //         className="countdown"
        //         endAt={'2021-09-25 17:00:00'} // Date/Time
        //     />
        //         </Cell>
        //         <Cell col={4}>
                 
        //         </Cell>
        //         <Cell col={4}>
                 
        //         </Cell>
        //     </Grid>
        //     <Grid className="">
        //         <Cell col={4}>
                 
        //         </Cell>
        //         <Cell col={4}>
                 
        //         </Cell>
        //         <Cell col={4}>
                 
        //         </Cell>
        //     </Grid>
        //     <Grid className="landing-grid">
        //         <Cell col={1}>
                 
        //         </Cell>
        //         <Cell col={10}>
        //         <div className="banner-text" style={{ textAlign: 'center' }}>
        //             <h3 className="wedDate" style={{ fontFamily: 'Martel, serif'}}>
        //                 09.25.21
        //                 </h3>
        //             <h1>Ruve & Terahje</h1>
        //             <h3 style={{ fontFamily: 'Martel, serif'}}>
        //             Are Getting Married!

        //             </h3>

        //             {/* <hr/> */}
        //         </div>
        //         </Cell>
        //         <Cell col={1}>
                 
        //         </Cell>
        //     </Grid>
        // </>
        )
    }
}

export default Landing;