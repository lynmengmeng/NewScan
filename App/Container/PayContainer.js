import {connect} from 'react-redux';
import Pay from '../Views/Pay';
import PayService from '../Service/PayService'
import Actions from '../Action'
const mapStateToProps = (store, ownProps) => {
    return {
        total:store.saleReducer.total,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        backSale:function () {
            this.props.navigation.navigate('Sale');
            dispatch(Actions.changeStepPosition(true,1))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pay)