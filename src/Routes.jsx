import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { 
    LoginPage,
    StockPage,
    HomePage 
} from '@pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/stock' component={StockPage} />
            </Switch>
        </Router>
    );
}

export default Routes;