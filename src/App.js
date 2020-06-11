import React from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Layout} from "./components";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard"/>}/>
                <Route
                    exact
                    path="/app"
                    render={() => <Redirect to="/app/dashboard"/>}
                />
                <Route path="/app" component={Layout}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
