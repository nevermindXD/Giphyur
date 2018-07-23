import React, {Component} from 'react';
import {trending} from '../../api';
import Waterfall from '../../containers/Waterfall';
import Uniform from '../../containers/Uniform';
import PropTypes from 'prop-types';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            charge:false
        }
    }

    trendingAPI = () => {
        const {getGifs} = this.props
        trending()
        .then(res => {
            getGifs(res.data);
            this.setState({
                charge:true
            })
        })
    }
    
    componentWillMount() {
        this.trendingAPI();
    }
    
    render () {
        const {waterfall} = this.props;
        return(
            <div>
                {this.state.charge &&
                    <div>
                        {waterfall?<Waterfall/>:<Uniform/>}
                    </div>}
            </div>
        )
    }
}
Dashboard.prototypes = {
    waterfall: PropTypes.bool,
    getGifs: PropTypes.func
}