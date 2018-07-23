import React from 'react';
import { Provider } from 'react-redux';
import Sitemap from './Sitemap';
import Navbar from '../containers/Navbar';    
import Dashboard from '../containers/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';



const Root = ({store}) => (
    <Provider store = {store}>
        
        <div>
            <Navbar/>
            <Dashboard/>
            <Sitemap/>
        </div>
    </Provider>
)

export default Root;