import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/*Force one route per page*/}
                <Route path="/" component={Landing} exact/>
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;