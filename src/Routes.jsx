import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { 
    EntryPage,
    StockPage,
    HomePage 
} from '@pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={EntryPage} />
                <Route exact path='/stock' component={StockPage} />
            </Switch>
        </Router>
    );
}

export default Routes;