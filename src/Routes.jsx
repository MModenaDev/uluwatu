import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { EntryPage } from '@pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={EntryPage} />
            </Switch>
        </Router>
    );
}

export default Routes;