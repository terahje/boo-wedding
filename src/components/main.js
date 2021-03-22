import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage';
import OurStory from './ourStory';
import Registry from './registry';
import Festivities from './festivities';
// import Contact from './contact';
// import Projects from './projects';
// import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path= "/" component={ LandingPage } />
        <Route path= "/ourStory" component={ OurStory } />
        <Route path= "/registry" component={ Registry } />
        <Route path= "/festivities" component={ Festivities } />
        {/* <Route path= "/contact" component={ Contact } /> */}
        {/* <Route path= "/projects" component={ Projects } /> */}
        {/* <Route path= "/resume" component={ Resume } /> */}
    </Switch>
)

export default Main;