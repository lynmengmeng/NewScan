import React, {Component} from 'react';
import {
    Text
} from 'react-native';
import moment from 'moment';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: moment().format('YYYY年M月DD日 H:mm:ss')
        }
        this.timer = setInterval(() => {
            this.setState({currentTime: moment().format('YYYY年M月DD日 H:mm:ss')})
        }, 1000);
    }

    //组件卸载前清空定时器
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }

    render() {
        return (
            <Text style={{fontSize: 18, color:'#ffffff'}}>
                {this.state.currentTime}
            </Text>
        )
    }
}





