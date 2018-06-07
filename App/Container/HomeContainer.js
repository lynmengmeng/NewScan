import {connect} from 'react-redux';
import Home from '../Views/Home';
import Actions from '../Action'
const mapStateToProps = (store, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        noMember:function () {
            this.props.navigation.navigate('Sale')
            dispatch(Actions.changeStepPosition(true,1))
            dispatch(Actions.isShowMember(false))
        },
        Member:function () {
            this.props.navigation.navigate('Sale')
            dispatch(Actions.changeStepPosition(true,1))
            dispatch(Actions.isShowMember(true))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)