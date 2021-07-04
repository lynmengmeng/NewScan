import {connect} from 'react-redux';
import Sale from '../Views/Sale';
import SaleService from '../Service/SaleService'
import Actions from '../Action'
import {ToastAndroid} from 'react-native'
const mapStateToProps = (store, ownProps) => {
    return {
        isShowMember:store.memberReducer.isShowMember,
        goodsList:store.saleReducer.goodsList,
        total:store.saleReducer.total,
        ysje:store.saleReducer.ysje,
        disc:store.saleReducer.disc,
        memberInfo:store.memberReducer.memberInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //查询商品
        queryGoods:function () {
            SaleService.queryGoods(this.state.barCode).then((resData)=>{
                let data = eval('(' + resData[1].value.replace(/&quot;/g,"'") + ')');
                console.log(data)
                dispatch(Actions.setGoodsList(data))
                this.setState({barCode:''})
                this.refs['contain'].focus();
            })
        },

        //取消交易
        cancelDeal:function () {
            this.props.navigation.navigate('Home')
            dispatch(Actions.changeStepPosition(true,0))
            dispatch(Actions.clearGoodsList())
        },
        
        //提交整单
        submitPay:function () {
            if(this.props.goodsList.length < 1){
                ToastAndroid.showWithGravity('商品不能为空！',ToastAndroid.LONG,ToastAndroid.TOP);
            }else{
                SaleService.calcOrder(this.props.goodsList).then((resData)=>{
                    let data = eval('(' + resData[1].value.replace(/&quot;/g,"'") + ')');
                    dispatch(Actions.calcOrder(data))
                    dispatch(Actions.changeStepPosition(true,2))
                    this.props.navigation.navigate('Pay')
                })
            }
        },

        //删除商品
        deleteGoods:function (index) {
            dispatch(Actions.deleteGoods(index))
            if(this.props.goodsList.length >= 1){
                SaleService.calcOrder(this.props.goodsList).then((resData)=>{
                    let data = eval('(' + resData[1].value.replace(/&quot;/g,"'") + ')');
                    dispatch(Actions.calcOrder(data))
                })
            }else{
                dispatch(Actions.clearPrice())
            }

        },

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sale)