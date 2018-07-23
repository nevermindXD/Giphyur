import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import {getCategories,getPresentation,changePresentation,getSearchGifs,changeHeightNavbar} from '../../redux/actions/actionTypes';


const mapStateToProps = (state) => ({
    cards: state.cardReducer,
    categories: state.categoriesReducer,
    waterfall: state.waterfallReducer,
    heightNavbar: state.heightReducer
})


const mapDispatchToProps = (dispatch) => ({
    getGifs: cards => dispatch(getSearchGifs(cards)),
    getCat: categories => dispatch(getCategories(categories)),
    getWaterfall: waterfall => dispatch(getPresentation(waterfall)),
    newPresentation: waterfall => dispatch(changePresentation(waterfall)),
    chargeCategories: categories => dispatch(getCategories(categories)),
    setHeight: heightNavbar => dispatch(changeHeightNavbar(heightNavbar))
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);