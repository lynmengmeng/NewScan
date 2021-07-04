import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    Keyboard
} from 'react-native';

let keyBoardArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '清空', '0', '确定'];
export default class KeyBoard extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            defaultText:'18676392998',
        };
    }






    render() {
        return (
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='请输入会员号码'
                    defaultValue={this.state.defaultText}
                    value={this.state.defaultText}
                    underlineColorAndroid="transparent"
                    ref='goodsCodeInput'
                    keyboardType='numeric'
                />
                <View style={styles.container}>
                    {
                        keyBoardArr.map((item, index) => {
                            return (
                                <TouchableHighlight key={index} underlayColor='rgba(0,0,0,.2)' onPress={() => {
                                    let defaultText = this.state.defaultText
                                    switch (item){
                                        case '清空':{
                                            this.setState({
                                                defaultText:''
                                            })
                                            break;
                                        }
                                        case '确定':{
                                            this.props.callback(defaultText)
                                            break;
                                        }
                                        default:{
                                            if(isNaN(defaultText)){
                                                this.setState({
                                                    defaultText:item
                                                })
                                            }else{
                                                this.setState({
                                                    defaultText:defaultText + item,
                                                })
                                            }
                                            break
                                        }
                                    }

                                }}>
                                    <View style={styles.button}>
                                        <Text>{item}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
let kWidth = 300;
const styles = StyleSheet.create({
    wrap:{
        borderLeftWidth:1,
        borderLeftColor:'rgba(0,0,0,.2)',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,.2)',
    },
    container: {
        width: kWidth,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    button: {
        width: kWidth / 3,
        height: kWidth / 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor:'rgba(0,0,0,.2)',
        borderRightWidth:1,
        borderTopColor:'rgba(0,0,0,.2)',
        borderTopWidth:1,
    },
    input: {
        backgroundColor: '#fff',
        width: kWidth,
        padding: 15,
        letterSpacing:2,
        borderRightColor:'rgba(0,0,0,.2)',
        borderRightWidth:1,
        borderTopColor:'rgba(0,0,0,.2)',
        borderTopWidth:1,
    }
})
