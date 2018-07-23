import React, {Component} from 'react';
import Card from '../Card';
import {RowCard} from './uniform.styled';
import {Col} from 'reactstrap';
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types';

const breakpointColumnsObj = {
    default: 8,
    2400:7,
    2000:6,
    1700:4,
    1200: 3,
    700: 2,
    500: 1
};


export default class Uniform extends Component {

    render () {
        const {cards} = this.props;
        return(
            <RowCard>
                <Col xl={{offset:1,size:10}} lg={{offset:1,size:10}} md={{offset:1,size:10}}>
                    <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                        {cards.map((obj,i)=>(
                        <Card  imgsrc={obj.images.downsized.gif_url} title={obj.title} key={i}/>
                        ))}
                    </Masonry>
                </Col>
            </RowCard>
        )
    }

}

Uniform.propTypes = { 
    cards: PropTypes.array
};