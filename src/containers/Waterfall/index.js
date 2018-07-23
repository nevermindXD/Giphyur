import { connect } from 'react-redux';
import Waterfall from '../../components/Waterfall';

const mapStateToProps = (state) => ({
    cards: state.cardReducer,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Waterfall);