import {connect} from 'react-redux';
import Step from '../Common/Step';
const mapStateToProps = (store, ownProps) => {
    return {
        currentPosition:store.stepReducer.currentPosition,
        isShowStep:store.stepReducer.isShowStep
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Step)