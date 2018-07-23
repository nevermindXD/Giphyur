import React , { Component } from 'react';
import { BoxCard,GCard,TitleCard,TextTitleCard} from './card.styled';
import PropTypes from 'prop-types';


export default class GifCard extends Component{

    render() {
        const {uniform} = this.props;
        if(!uniform){
            return(
                <BoxCard>
                    <GCard uniform>
                        <div>
                            <img src={this.props.imgsrc} width="100%" height="100%"/>
                        </div>
                        <TitleCard uniform>
                            <TextTitleCard>
                                {this.props.title}
                            </TextTitleCard>
                        </TitleCard>
                    </GCard>
                </BoxCard>
                )
        }else{
            return(
                <BoxCard>
                    <GCard>
                        <div>
                            <img src={this.props.imgsrc} width="100%" height="100%"/>
                        </div>
                        <TitleCard>
                            <TextTitleCard>
                                {this.props.title}
                            </TextTitleCard>
                        </TitleCard>
                    </GCard>
                </BoxCard>
                )
        }
        
    }
}

GifCard.prototypes = {
    imgsrc: PropTypes.string,
    title: PropTypes.string,
    uniform: PropTypes.bool
}