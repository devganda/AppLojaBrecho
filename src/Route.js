import React from "react";
import {Route, Routes} from 'react-router-dom';
import RouterHandler from './components/RouterHandler';

import Home from './pages/home';
import Sobre from './pages/sobre';
import NotFound from './pages/notfound';
import Signin from './pages/signin';
import Signup from './pages/signup';
import AdPage from './pages/adpage';
import AddAd from './pages/addad';
import Ads from './pages/ads';

const RouteOlx = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/sobre" element={<Sobre/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/ad/:id" element={<AdPage/>}/>
            <Route exact path="/post-and-ad" element={<RouterHandler private><AddAd/></RouterHandler>}/>
            <Route exact path="/ads" element={<Ads/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default RouteOlx;