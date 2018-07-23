import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';
import {getSearchGifs,getCategories} from '../../redux/actions/actionTypes';

const mapStateToProps = (state) => ({
    categories: state.categoriesReducer,
    waterfall: state.waterfallReducer
})


const mapDispatchToProps = (dispatch) => ({
    getGifs: cards => dispatch(getSearchGifs(cards)),
    chargeCategories: categories => dispatch(getCategories(categories))
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);