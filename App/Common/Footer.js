import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Clock from "./Clock";
export default class Footer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color:'#ffffff',fontSize:20}}>华润自助POS收银系统</Text>
                <Clock/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:'#686878',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:40,
    }
})



