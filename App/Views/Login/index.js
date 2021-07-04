import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import styles from '../../Styles/login'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWd: ''
        }
    }

    componentDidMount() {
        this.props.hideStep()
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.form}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../Assets/image/icon3.png')}
                            resizeMode='center'
                            style={{height:'100%'}}
                        />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../../Assets/image/icon1.png')}/>
                        <TextInput
                            ref="1"
                            placeholder='账号'
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            keyboardType='numeric'
                            defaultValue=''
                            onSubmitEditing={this.props.focusNextField.bind(this, '2')}
                            onChangeText={(text) => {
                                this.setState({
                                    userName: text
                                })
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../../Assets/image/icon2.png')}/>
                        <TextInput
                            ref="2"
                            placeholder='密码'
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            returnKeyType='done'
                            keyboardType='numeric'
                            defaultValue=''
                            secureTextEntry={true}
                            onChangeText={(pwd) => {
                                this.setState({
                                    passWd: pwd
                                })
                            }}
                            onSubmitEditing={this.props.doLogin.bind(this)}
                        />
                    </View>
                    <TouchableHighlight style={styles.loginButton} onPressIn={this.props.doLogin.bind(this)}>
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

