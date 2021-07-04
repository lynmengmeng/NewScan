import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(0,0,0,.4)',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex:3,
        justifyContent:'center',
        alignItems:'center',
        bottom:0,
    },
    memberBox:{
        width:'50%',
        height:'30%',
        backgroundColor:'#efefef',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
});

module.exports = styles;
