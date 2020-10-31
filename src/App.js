import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom"
import "./scss/style.scss"

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);

// Pages
const Landing = React.lazy(() => import("./pages/landing/landing"))

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading}>
                <Switch>
                    <Route exact path="/" name="Landing Page" render={(props) => <Landing {...props}/>}/>
                
                    <Redirect from="*" to="/" />
                </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}

export default App
