import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from '../../Styles/member'
import Keyboard from '../../Common/KeyBoard'
export default class Member extends Component{

    keyboardCallBack(keyboard){
        this.props.queryMember(keyboard)
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.memberBox}>
                    <TouchableHighlight
                        style={{
                            position:'absolute',
                            right:5,
                            top:5,
                        }}
                        underlayColor='rgba(0,0,0,.2)'
                        onPress={this.props.hideMember.bind(this)}
                    >
                        <Image source={require('../../Assets/image/icon5.png')}/>
                    </TouchableHighlight>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{
                            fontSize:25,
                            color:'#85C418',
                            paddingBottom:10
                        }}>请刷会员卡或输入手机号码</Text>
                        <Text style={{fontSize:15}}>提示：登录会员享受会员相关的积分及价格优惠政策</Text>
                    </View>
                    <Keyboard callback={this.keyboardCallBack.bind(this)}/>
                </View>
            </View>
        )
    }
}