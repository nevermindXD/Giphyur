import styled from 'styled-components';

export const BoxCard = styled.div`
    padding-bottom: 15px;
    margin-left: 25px;
`

export const GCard = styled.div`
    display: block;
    border-radius: 4px;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;
    background-size: 145px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4);
    border-radius: 3px;
    background-color: ##494A52;
    transition: box-shadow .25s;
    -webkit-transition: box-shadow .25s

    height:${props => props.uniform ?'165px':''};
`

export const TitleCard = styled.div`
    padding:15px;
    width:100%;
    background-color: #494A52;
    position: ${props => props.uniform ?'absolute':''};
    top: ${props => props.uniform ?'105px':''};
    height: ${props => props.uniform ?'115px':''};
`

export const TextTitleCard = styled.div`
    font-weight: 600;
    line-height: 1.14;
    font-size: 14px;
    text-align: left;
    color: white;
    display: inline-block;
    max-height: 45px;
    overflow: hidden;
    padding: 0 15px;
`