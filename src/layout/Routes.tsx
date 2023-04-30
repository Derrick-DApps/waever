import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import HouseTitles from "../pages/HouseTitles";


const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact key="/" path="/" component={Index} />;
                <Route exact key="/" path="/titles" component={HouseTitles} />;
            </Switch>
        </main>
    )
};

export default Routes;