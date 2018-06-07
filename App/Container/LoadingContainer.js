import {connect} from 'react-redux';
import Loading from '../Common/Loading';
const mapStateToProps = (store, ownProps) => {
    return {
        isShowLoading:store.loadingReducer.isShowLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading)