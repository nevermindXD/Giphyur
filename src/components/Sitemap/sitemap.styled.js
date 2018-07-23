import styled from 'styled-components';


export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    white-space: nowrap;
    background-color: #33353b;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    
    transition-property: display,bottom;
    transition-duration: .3s;
    transition-timing-function: linear;
    animation-delay: 2s;
    -webkit-transition-property: display,bottom;
    -webkit-transition-duration: .3s;
    -webkit-transition-timing-function: linear;
    -webkit-animation-delay: 2s;
`
export const List = styled.ul`
    overflow: hidden;
    margin: 0 24px;
    font-size: 13px;
    letter-spacing: .5px;
    text-align: left;
    color: #b4b9c2;
    display: flex;
    width: 100%;
    padding: 0;
    list-style-type: none;
    
`

export const Elem = styled.li`
    display: inline-block;
    margin: auto 20px;
    vertical-align: middle;
`
export const ARef = styled.a`
    text-decoration: none;
    color: inherit;
    line-height: 50px;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
`

export const App = styled.div`
    padding: 0 47px;
    font-size: 13px;
    background-color: #474a51;
    display: flex;
    min-width: 170px;
    font-weight: 700;
`

export const AppA = styled.a`
    color: white;
    letter-spacing: .5px;
    text-decoration: none
    line-height: 50px;
    &:hover{
        color: white;
        letter-spacing: .5px;
        text-decoration: none
        line-height: 50px;
    }
`

export const DropdownMenu = styled.div`
    padding-top: 0px;
    margin-right: 24px;
    color: #b4b9c2;
    position: relative;
    font-size: 16px;
`

export const DropdownTitle = styled.div`
    font-weight: 600;
    letter-spacing: 1.5px;
    text-align: right;
    color: #babec4;
    cursor: pointer;

`

export const ImgDropdown = styled.img`
    font-size: 10px;
    margin-left: 5px;
    display: inline;
    border-style: none;
    opacity: .6;
`

export  const DropdownM = styled.div`
margin-left: 1px;
left: 50%!important;
    right: auto!important;
    text-align: center!important;
    transform: translate(-50%)!important;
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    margin-top: -1px;
    z-index: 1000;
    right: -28px;
    padding-top: 10px;
    display: none;
`

export const TakeUpDiv = styled.div`
    position: fixed;
    perspective: 1000;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    width: 90px;
    height: 41px;
    border-radius: 8px 8px 8px 0;
    background-color: #53565f;
    padding: 6px;
    color:#fff;
    box-sizing: border-box;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: none;
    box-shadow: 0 2px 24px 0 rgba(0,0,0,.5);
    transition-property: display,bottom;
    transition-duration: .3s;
    transition-timing-function: linear;
    animation-delay: 2s;
    -webkit-transition-property: display,bottom;
    -webkit-transition-duration: .3s;
    -webkit-transition-timing-function: linear;
    -webkit-animation-delay: 2s;
    z-index: 20px;
    display: block;
`

export const TakeUpText = styled.span`
    float: left;
    width: 50px;
    font-size: 11px;
    margin-left: 3px;
    text-transform: uppercase;
`

