// let's go!
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router';

import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
        return(
            <BrowserRouter> 
                <div>
                    <Switch>
                        <Route exact path="/" component={StorePicker } />
                        <Route path="/store/" component={App } />
                        <Route component={NotFound} />
                    </Switch>
                </div>    
            </BrowserRouter>
        )
    }

render(<Root />, document.querySelector('#main'));
