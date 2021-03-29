import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage';
import OurStory from './ourStory';
import Registry from './registry';
import Festivities from './festivities';
import ToDo from './toDotoEat';
import Gallery from './gallery';
import Venue from './venue';


const Main = () => (
    <Switch>
        <Route exact path= "/" component={ LandingPage } />
        <Route path= "/ourStory" component={ OurStory } />
        <Route path= "/registry" component={ Registry } />
        <Route path= "/festivities" component={ Festivities } />
        <Route path= "/toDotoEat" component={ ToDo } />
        <Route path= "/gallery" component={ Gallery } />
        <Route path= "/venue" component={ Venue } />
    </Switch>
)

export default Main;