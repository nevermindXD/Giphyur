import React , { Component } from 'react';
import {categories, searchApi} from '../../api';
import {ReactHeight} from 'react-height';
import PropTypes from 'prop-types';
import {NavbarRow,
        NavbarSearchRow,
        NewPostButton,
        SearchDiv,
        ButtonSearch,
        InputSearch,
        ButtonCol,
        IconBadge,
        SignInButton,
        SignUpButton,
        WelcomeMessage,
        ExploreTag,
        MoreTags,
        TagsDiv,
        MostViralSpan,
        NewsCol,
        IconSelect,
        TagDiv,
        TagTile,
        TagName,
        TagCant} from './navbar.styled';
import {Col,Row, Tooltip} from 'reactstrap';

let showI ={
    overflow:'visible',
    height:'auto'
}

let HiddeI = {
     overflow:'hidden'
}

export default class Navbar extends Component{  
    constructor(props) {
        super(props);
        this.state={
            expand:false,
            height:0,
            charge:false,
            y:0,
            word:'',
            uniform:false,
            waterfall:false
        }
    }

    toggleUniform = () => {
        this.setState({
          uniform: !this.state.uniform  
        });
    }

    toggleWaterfall = () => {
        this.setState({
          waterfall: !this.state.waterfall
        });
    }

    componentWillMount() {
        this.getCategories();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    getValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
    }

    handleScroll = () => {
        this.setState({
            y:window.scrollY
        })
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.searchAPI();
        }
    }

    getCategories = () => {
        const {chargeCategories} = this.props;
        
        categories()
        .then( r => {
            
            chargeCategories(r.data);
            this.setState({
                charge:true
            })
        })
    }

    searchAPI = () => {
        const { getGifs} = this.props;
        const {word} = this.state;
        
        searchApi(word)
        .then(r=>{
            console.log(r.data)
            getGifs(r.data);     
        })
    }

    exploreTagsRender = () =>{
        const {categories} = this.props;
        if(categories[0]!==undefined){
            return(
                categories.map((obj,i) => (
                    i===0?<TagDiv first bcki={obj.gif.images.downsized.gif_url} key={i}>
                            <TagTile>
                                <TagName>
                                    {obj.name}
                                </TagName>
                                <TagCant>
                                    {obj.subcategories.length} categories
                                </TagCant>
                            </TagTile>
                        </TagDiv>
                        :<TagDiv bcki={obj.gif.images.downsized.gif_url} key={i}>
                        <TagTile>
                            <TagName>
                                {obj.name}
                            </TagName>
                            <TagCant>
                                {obj.subcategories.length} categories
                            </TagCant>
                        </TagTile>
                    </TagDiv>
                ))
            )
        }

    }


    render () {
        // console.log(this.state.height-this.state.y);
        // 67 es el bueno aprox
        
        const {newPresentation,setHeight} = this.props;
        const {word} = this.state;

        return(
            <ReactHeight onHeightReady={height =>   setHeight({height})}>
            <div>
            <NavbarSearchRow>
                <Col xl="3" lg="3" mg="3">
                    <div>
                        <img src="https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg"/>
                        <NewPostButton style={{backgroundColor:'#00C872'}}>
                            <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg"/> 
                            new post
                        </NewPostButton>
                    </div>
                </Col>
                <Col xl="6" lg="6" mg="6">
                    <div>
                        <SearchDiv>
                            <ButtonSearch onClick={()=>this.searchAPI()}><img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.94d41ef40ad4e47162607d90122c892f.svg"/></ButtonSearch>
                            <InputSearch  onChange={this.getValue} 
                                          onKeyPress={this._handleKeyPress}
                                          value={word} 
                                          type="text" 
                                          name="word"
                                          placeholder="Images, #tags, @users oh my!"/>
                        </SearchDiv>
                    </div>
                </Col>
                <ButtonCol xl="3" lg="3" mg="3">
                    <div>
                        <a href="https://imgur.com/leaderboard">
                            <IconBadge src = 'https://s.imgur.com/desktop-assets/desktop-assets/icon-leaderboard.99437df2b52eceb16428afa3c5ae40c1.svg'/>
                        </a>
                        <SignInButton href="https://imgur.com/signin?redirect=%2F">Sign in</SignInButton>
                        <SignUpButton style={{backgroundColor:'#00C872'}}>Sign up</SignUpButton>
                    </div>
                </ButtonCol>
            </NavbarSearchRow>

            <WelcomeMessage>Only the finest 100% organic, hand-selected memes and GIFs.</WelcomeMessage>
            
            <NavbarRow>
                <Col xl={{offset:1, size:10}} lg={{offset:1, size:10}} mg={{offset:1, size:10}}>
                    <Row>
                        <ExploreTag xl="2" lg="2" mg="2">
                            EXPLORE TAGS
                        </ExploreTag>
                        <MoreTags xl={{size:"2", offset: "8"}} lg={{size:"2", offset: "8"}} md={{size:"2", offset: "8"}}>
                            <span onClick={()=>this.setState({expand:!this.state.expand})}>{this.state.expand?'LESS TAGS X':'MORE TAGS +'}</span>
                        </MoreTags>
                    </Row>
                    
                    <TagsDiv style={this.state.expand?showI:HiddeI} >
                        {this.exploreTagsRender()}
                    </TagsDiv>
                    
                </Col>
            </NavbarRow>

            <NavbarRow>
                <Col xl={{offset:1, size:2}} lg={{offset:1, size:2}} mg={{offset:1, size:2}}>
                    {/* crearestilo para imagen  */}
                    <img src="//s.imgur.com/images/favicon-32x32.png"/>
                    <MostViralSpan>MOST VIRAL</MostViralSpan>
                </Col>
                <NewsCol xl={{size:"2", offset: "5"}} lg={{size:"2", offset: "5"}} md={{size:"2", offset: "5"}}>
                    newest
                </NewsCol>
                <Col xl="1" lg="2" mg="2">
                    <Row>
                        {/* <div>
                            <PlayPause id="TooltipPause" src="https://s.imgur.com/desktop-assets/desktop-assets/icon-pause.e98c501b3d08659dd651aba33d67c93c.svg"/>
                        </div> */}
                        <IconSelect>
                            <svg onClick={()=> newPresentation(true)} style={{cursor:'pointer'}} id="TooltipWaterfall" xmlns="http://www.w3.org/2000/svg" width="17" height="17"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g id="svg_10"><polygon points="6.178707122802734,0 1.1573245525360107,0 0.15306150913238525,0 0.15306150913238525,1.2756938815360286 0.15306150913238525,7.654227611753868 0.15306150913238525,8.929917633937634 1.1573245525360107,8.929917633937634 6.178707122802734,8.929917633937634 7.182987213134766,8.929917633937634 7.182987213134766,7.654227611753868 7.182987213134766,1.2756938815360286 7.182987213134766,0 "></polygon></g></g><g><g id="svg_34"><polygon points="6.278707504272461,12.099999867934457 1.25732421875,12.099999867934457 0.25306129455566406,12.099999867934457 0.25306129455566406,12.804268837391646 0.25306129455566406,16.325651648036 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.325651648036 7.282987594604492,12.804268837391646 7.282987594604492,12.099999867934457 "></polygon></g></g><g><g id="svg_38"><polygon points="15.978708267211914,8.100003717719119 10.957324981689453,8.100003717719119 9.953062057495117,8.100003717719119 9.953062057495117,9.361411389385012 9.953062057495117,15.66851682793822 9.953062057495117,16.929922103881836 10.957324981689453,16.929922103881836 15.978708267211914,16.929922103881836 16.982988357543945,16.929922103881836 16.982988357543945,15.66851682793822 16.982988357543945,9.361411389385012 16.982988357543945,8.100003717719119 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.6185544841542594 9.85306167602539,4.2113652655988005 9.85306167602539,4.929918346846392 10.857324600219727,4.929918346846392 15.878707885742188,4.929918346846392 16.88298797607422,4.929918346846392 16.88298797607422,4.2113652655988005 16.88298797607422,0.6185544841542594 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg>
                            <Tooltip placement="bottom" isOpen={this.state.waterfall} target="TooltipWaterfall" toggle={this.toggleWaterfall}>
                                Waterfall
                            </Tooltip>
                        </IconSelect>
                        <IconSelect>
                            <svg onClick={()=> newPresentation(false)} style={{cursor:'pointer'}}  id="TooltipUniform" xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17"><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect><g><g><g><polygon points="6.17870715566179,0 1.1573245256338325,0 0.15306144952774048,0 0.15306144952774048,1.0042672515679527 0.15306144952774048,6.0256540079346905 0.15306144952774048,7.02991762439467 1.1573245256338325,7.02991762439467 6.17870715566179,7.02991762439467 7.18298727747689,7.02991762439467 7.18298727747689,6.0256540079346905 7.18298727747689,1.0042672515679527 7.18298727747689,0 "></polygon></g></g><g><g><polygon points="6.278707504272461,10 1.25732421875,10 0.25306129455566406,10 0.25306129455566406,11.004266738891602 0.25306129455566406,16.025653839111328 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.025653839111328 7.282987594604492,11.004266738891602 7.282987594604492,10 "></polygon></g></g><g><g><polygon points="15.978708267211914,9.900003053247929 10.957324981689453,9.900003053247929 9.953062057495117,9.900003053247929 9.953062057495117,10.90426979213953 9.953062057495117,15.925656892359257 9.953062057495117,16.929921723902225 10.957324981689453,16.929921723902225 15.978708267211914,16.929921723902225 16.982988357543945,16.929921723902225 16.982988357543945,15.925656892359257 16.982988357543945,10.90426979213953 16.982988357543945,9.900003053247929 "></polygon></g></g><g><g><polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.9042667374014854 9.85306167602539,5.925653837621212 9.85306167602539,6.929918669164181 10.857324600219727,6.929918669164181 15.878707885742188,6.929918669164181 16.88298797607422,6.929918669164181 16.88298797607422,5.925653837621212 16.88298797607422,0.9042667374014854 16.88298797607422,-0.10000000149011612 "></polygon></g></g></g></svg>
                            <Tooltip placement="bottom" isOpen={this.state.uniform} target="TooltipUniform" toggle={this.toggleUniform}>
                                Uniform
                            </Tooltip>
                        </IconSelect>
                    </Row>
                </Col>


            </NavbarRow>
            
            </div>
            </ReactHeight>
        )
    }

}

Navbar.propTypes = {
    chargeCategories: PropTypes.func,
    getGifs: PropTypes.func,
    newPresentation: PropTypes.func,
    setHeight: PropTypes.func
}