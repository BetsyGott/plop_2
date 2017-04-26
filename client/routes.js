import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {App} from './App';
import {Map} from './Map';
import {Review} from './Review';
import {Detail} from './Detail';

export default  (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Map}/>
            <Route path="/map" component={Map}/>
            <Route path="/review(/:id)" component={Review}/>
            <Route path="/detail/:id" component={Detail}/>
        </Route>
    </Router>
);
