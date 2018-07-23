import { connect } from 'react-redux';
import Uniform from '../../components/Uniform';

const mapStateToProps = (state) => ({
    cards: state.cardReducer,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Uniform);