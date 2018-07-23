import React ,{ Component } from 'react';
import {Tooltip} from 'reactstrap';
import {Footer,
        List, 
        Elem, 
        ARef, 
        App, 
        AppA, 
        DropdownMenu, 
        DropdownTitle, 
        ImgDropdown,
        TakeUpDiv,
        TakeUpText } from './sitemap.styled';

const links = [
    {
        name:'About',
        url:'https://imgur.com/about'
    },
    {
        name:'Press',
        url:'https://imgur.com/press'
    },
    {
        name:'Blog',
        url:'https://blog.imgur.com/'
    },
    {
        name:'Privacy',
        url:'https://imgur.com/privacy'
    },
    {
        name:'Terms',
        url:'https://imgur.com/tos'
    },
    {
        name:'Advertise',
        url:'https://imgurinc.com/advertise'
    },
    {
        name:'Ad Choices',
        url:'https://imgur.com/privacy#adchoices'
    },
    {
        name:'Rules',
        url:'https://imgur.com/rules'
    },
    {
        name:'Help',
        url:'https://help.imgur.com/hc/en-us'
    },
    {
        name:'Careers',
        url:'https://imgurinc.com/careers'
    },
    {
        name:'Store',
        url:'store.imgur.com'
    },
    {
        name:'API',
        url:'https://apidocs.imgur.com/'
    }
    
];

let hideBar = {
    bottom:'-50px'
}

let showBar = {
    bottom: '0px'
}

let hideUp = {
    bottom: '-55px'
}

let showUp = {
    bottom: '20px'
}

export default class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeHeight:window.innerHeight,
            scrlly:0,
            finish:false,
            show:false,
            tooltipOpen: false,
            cant:12 - Math.round((700 - window.innerHeight)/30)
        };
    }
    
    
    componentWillMount() {
        window.addEventListener('resize', this.handleX);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        this.setState({
            finish:true
        })
    }
    

    toggle = () => {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }

    scrollTo = () => {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: 0
        });
      }


    handleScroll= ()=>{
        if(window.scrollY<this.state.scrlly || window.scrollY===0){
            this.setState({
                show:false
            })
        }else{
            this.setState({
                show:true
            })
        } 
        this.setState({
            scrlly:window.scrollY
        })
    }
    
    handleX = () =>{
        this.setState({
            sizeHeight:window.innerHeight
        })
        
        this.setState({
            cant:12 - Math.round((700 - window.innerHeight)/30)
        })
    }

    tooltipList = () => {
        const {cant} = this.state;
                    return(
                        <div>hola</div>
                    )
    }

    footerList = () => {
        const {cant} = this.state;
        return(
            links.map( (link,i) => {
                if(i<cant && cant!==0){
                    return(
                    <Elem key={i}>
                        <ARef href={link.url}>{link.name}</ARef>
                    </Elem>
                    )
                }        
            })
        )
    }

    render() {
        const {sizeHeight} = this.state;
        return(
            <div>
                <Footer ref = 'footer' style={this.state.show?hideBar:showBar}>
                <List>
                    <Elem>© 2018 Imgur, Inc</Elem>
                    {this.footerList()}
                </List>

                <DropdownMenu style={sizeHeight>670?{visibility:'hidden'}:{visibility:'visible'}} onClick={()=>this.setState({tooltipOpen:!this.state.tooltipOpen})}>
                    <div id="TooltipExample"></div>
                    <DropdownTitle>
                    <ImgDropdown src={'https://s.imgur.com/desktop-assets/desktop-assets/icon-points.5867bfb88971853dcfdf49b18f8455b9.svg'}/>
                    </DropdownTitle>
                    {this.state.finish &&<Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                        {
                            links.map( (obj,i) =>{
                                if(i>this.state.cant){
                                    return(
                                        <div key={i}>
                                            <a href={obj.link}>{obj.name}</a><br/>
                                        </div>
                                    )
                                }
                            })
                        }
                    </Tooltip>}
                </DropdownMenu>
                
                <App>
                    <AppA href="https://imgur.com/apps">Get the app</AppA>
                </App>

                </Footer>

                <TakeUpDiv onClick={()=> this.scrollTo()} style={this.state.show?showUp:hideUp}>
                    <TakeUpText>Take me up</TakeUpText>
                    <span>↑</span>
                </TakeUpDiv>

            </div>
            
        )
    }
};
