import {connect} from 'react-redux';
import Member from '../Views/Sale/member';
import Actions from '../Action'
import SaleService from "../Service/SaleService";
import {ToastAndroid} from 'react-native'
const mapStateToProps = (store, ownProps) => {
    return {
        isShowMember:store.memberReducer.isShowMember,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //隐藏会员框
        hideMember:function () {
            dispatch(Actions.isShowMember(false))
        },
        //查询会员
        queryMember:function (number) {
            if(number === ''){
                ToastAndroid.showWithGravity('会员号不能为空！',ToastAndroid.LONG,ToastAndroid.TOP);
            }else{
                SaleService.queryMember(number).then((resData)=>{
                    let data = eval('(' + resData[1].value.replace(/&quot;/g,"'") + ')');
                    dispatch(Actions.queryMember(data))
                    dispatch(Actions.isShowMember(false))
                })
            }
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Member)