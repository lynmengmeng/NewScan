import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
export default class Help extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight underlayColor='rgba(0,0,0,0.1)' onPress={()=>{

                }}>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        width:100,
                    }}>
                        <Image source={require('../Assets/image/icon10.png')} resizeMode='center'/>
                        <Text style={{color:'#85C418',paddingTop:10}}>寻求帮助</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:'50%',
        left:10,
        alignItems:'center',
        height:100,
        justifyContent:'center',
        width:100,
        marginTop:-50,
    }
})



