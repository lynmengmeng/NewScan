import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StatusBar,
    Image
} from 'react-native';
import styles from '../../Styles/pay'
import Step from '../../Container/StepContainer'
const payList = [
    {
        iconUrl:'http://sandbox.runjs.cn/uploads/rs/222/mmtn15x5/icon17.png',
        payName:'支付宝'
    },
    {
        iconUrl:'http://sandbox.runjs.cn/uploads/rs/222/mmtn15x5/icon18.png',
        payName:'微信'
    },
    {
        iconUrl:'http://sandbox.runjs.cn/uploads/rs/222/mmtn15x5/icon13.png',
        payName:'微众卡'
    },
    {
        iconUrl:'http://sandbox.runjs.cn/uploads/rs/222/mmtn15x5/icon19.png',
        payName:'礼品卡'
    },
    {
        iconUrl:'http://sandbox.runjs.cn/uploads/rs/222/mmtn15x5/icon14.png',
        payName:'预付卡'
    },
]
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.paySty6}>
                    <Step/>
                </View>
                <TouchableHighlight
                    style={styles.paySty1}
                    onPress={this.props.backSale.bind(this)}
                    underlayColor='rgba(0,0,0,0.1)'
                >
                    <View style={styles.paySty10}>
                        <Image
                            source={require('../../Assets/image/icon6.png')}
                            resizeMode='center'
                            style={{width:30}}
                        />
                        <Text style={styles.paySty2}>返回</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.paySty3}>请选择支付方式</Text>
                <View style={styles.paySty4}>
                    {
                        payList.map((item,index)=>{
                            return(
                                <TouchableHighlight
                                    key={index}
                                    style={styles.paySty7}
                                    onPress={()=>{

                                    }}
                                    underlayColor='rgba(0,0,0,0.1)'
                                >
                                    <View style={styles.paySty9}>
                                        <Image
                                            source={{uri: item.iconUrl}}
                                            resizeMode='center'
                                            style={{width:50,height:40}}
                                        />
                                        <Text style={styles.paySty8}>{item.payName}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
                <Text style={styles.paySty5}>应付金额：{this.props.total.toFixed(2)}</Text>

            </View>
        )
    }
}

