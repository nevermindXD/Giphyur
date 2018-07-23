import styled from 'styled-components';
import {Col, Row, Button} from 'reactstrap';


export const NavbarRow = styled(Row)`
    background-color: #251847;
    margin-right: 0 !important;
    margin-left: 0 !important;
    padding-top: 10px; 
    padding-bottom : 15px;
`
export const NavbarSearchRow = styled(Row)`
    background-color: #251847;
    margin-right: 0 !important;
    margin-left: 0 !important;
    padding-top: 10px; 
    padding-bottom : 15px;
    height: 60px;
`

export const NewPostButton = styled(Button)`
    height: 35px;
    box-shadow: 0 6px 10px 0 rgba(27,28,30,.31);
    color :white;
    margin-left: 10px;
    margin-right: 10px;
`

export const WelcomeMessage = styled(Col)`
    font-size: 24px;
    letter-spacing: .6px;
    color: #aed8ea;
    background-color:#251847;
    text-align: center;
    min-height: 34px;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const SearchDiv =  styled.div`
    text-align: right;
    position: relative;
    color: #aaa;
    padding-right: 10%;
    padding-top: 5px;
    font-size: 16px;
`

export const ButtonSearch = styled.button`
    position: absolute;
    font-size: 20px;
    right: 0;
    top: -2px;
    bottom: 0;
    margin: auto;
    background: transparent;
    color: #fff;
    border: 0 none;
    outline: 0 none;
    padding: 8px;
    position: absolute;
    right: 10%;
    z-index: 10;
`

export const InputSearch = styled.input`
    width:93%;
    height: 32px;
    background: hsla(0,0%,100%,.25);
    border: 1px solid transparent;
    padding: 8px 35px 8px 10px;
    border-radius: 3px;
    outline: 0 none;
    opacity: .70;
    min-height: 36px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .4px;
    color: #fff;
    text-shadow: inherit;
    -webkit-text-fill-color: inherit;
    &:focus{
        opacity: .95;
    }
    &::placeholder{
        color: #fff;
        opacity: .7;
    }
`

export const ButtonCol = styled(Col)`
    color:white;
    text-align: right;
`

export const IconBadge = styled.img`
    margin: 0 20px 1px 20px;
    &:hover{
        opacity: .5;
    }
`

export const SignInButton = styled.a`
    margin-right: 8px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    text-shadow: 0 14px 15px rgba(27,28,30,.31);
    white-space: nowrap;
    vertical-align: middle;
    &:hover{
        text-decoration: none;
        color: #fff;
    }
`

export const SignUpButton = styled(Button)`
    height: 35px;
    width: 100px;
    box-shadow: 0 6px 10px 0 rgba(27,28,30,.31);
    color :white;
    margin-left: 3px;
    margin-right: 10px;
`


export const ExploreTag = styled(Col)`
    height: 32px;
    justify-content: space-between;
    align-items: center;
    opacity: .7;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1.3px;
    text-align: left;
    color: #fff;
    text-transform: uppercase;
`

export const MoreTags = styled(Col)`
        height: 32px;
        justify-content: space-between;
        align-items: center;
        opacity: .7;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 1.3px;
        text-align: left;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
`

export const TagsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 180px;
`

export const MostViralSpan = styled.span`
    height: 32px;
    justify-content: space-between;
    align-items: center;
    opacity: .7;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1.3px;
    text-align: left;
    color: #fff;
    text-transform: uppercase;
`

    export const NewsCol = styled(Col)`
        height: 32px;
        justify-content: space-between;
        align-items: center;
        opacity: .7;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 1.3px;
        text-align: left;
        color: #fff;
        padding-top: 10px;
        text-align: right;
        text-transform: uppercase;
`

export const PlayPause = styled.img`
    padding-top: 10px;
    opacity: .4;
    cursor:pointer;
`

export const IconSelect = styled.div`
    padding-top: 10px;
    padding-left: 15px;
    fill:#fff;
    opacity: .7;
`

export const TagDiv = styled.a`
    background-image: url(${props => props.bcki});
    height: 160px;
    width: ${props => props.first?'266px':'127px'};
    margin: 12px 4px;
    position: relative;
    cursor: pointer;
    display: flex;
    -webkit-transition: transform .3s;
    transition: transform .3s;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 3px;
    background-size: auto 115px;
    background-repeat: repeat-x;
    background-position: 100% 0;
    transition: transform .3s;
    -webkit-transition: transform .3s;
    &:hover{
        bottom: 4px;
    }
`

export const TagTile = styled.div`
    padding: 12px;
    width: 100%;
    text-align: center;
    color: #fff;
    background-color: rgb(105, 154, 175);
    border-radius: 0 0 3px 3px;
`

export const TagName = styled.div`
    font-size: 14px;
    line-height: 1.15;
    letter-spacing: .4px;
    color: #fff;
    text-transform: capitalize;
`

export const TagCant = styled.div`
    margin-top: 4px;
    font-size: 11px;
    line-height: 1.46;
    letter-spacing: .4px;
    color: hsla(0,0%,100%,.5);
`