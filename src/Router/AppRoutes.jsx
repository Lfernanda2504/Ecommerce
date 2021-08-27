import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import  Menu from '../components/Menu';
import  Footer  from '../components/Footer'
import  App from '../containers/App';
import  Product  from '../containers/Product';


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Product" component={Product} />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default AppRoutes;