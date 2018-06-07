import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StatusBar,
    Image
} from 'react-native';
import styles from '../../Styles/home'
import Step from '../../Container/StepContainer'
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.headerRight}>
                    <Step/>
                </View>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image
                            source={require('../../Assets/image/icon3.png')}
                            resizeMode='center'
                            style={{height:'100%', width:300}}
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentLeft}>
                        <Image
                            source={require('../../Assets/image/icon4.png')}
                            resizeMode='center'
                            style={{height:400}}
                        />
                    </View>
                    <View style={styles.contentRight}>
                        <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' onPress={this.props.Member.bind(this)}>
                            <View style={[styles.but,styles.member]}>
                                <Text style={styles.btnText}>会员</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' onPress={this.props.noMember.bind(this)}>
                            <View style={[styles.but,styles.noMember]}>
                                <Text style={styles.btnText}>非会员</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

