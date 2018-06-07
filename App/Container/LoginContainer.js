import {connect} from 'react-redux';
import Login from '../Views/Login';
import Actions from '../Action'
import LoginService from '../Service/LoginService'
import {
    ToastAndroid
} from 'react-native'
import moment from "moment/moment";
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // 聚焦下一个输入框
        focusNextField: function (ref) {
            this.refs[ref].focus();
        },


        //登录ToastAndroid
        doLogin: function () {
            console.log()
            let userName = this.state.userName;
            let passWd = this.state.passWd;
            if(userName !== ''){
                ToastAndroid.showWithGravity('账号不能为空',ToastAndroid.LONG,ToastAndroid.TOP);
            }else if(passWd !== '' ){
                ToastAndroid.showWithGravity('密码不能为空',ToastAndroid.LONG,ToastAndroid.TOP);
            }else{
                LoginService.doLogin(userName,passWd,userName).then((resData)=>{
                    if(resData){
                        ToastAndroid.showWithGravity('登录成功',ToastAndroid.LONG,ToastAndroid.TOP);
                        this.props.navigation.navigate('Home');dispatch(Actions.changeStepPosition(true,0))

                        let data = eval('(' + resData[1].value.replace(/&quot;/g,"'") + ')');
                    }
                })
            }
        },

        //隐藏进步器
        hideStep:function () {
            dispatch(Actions.changeStepPosition(false))
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(Login)