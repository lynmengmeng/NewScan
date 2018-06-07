import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    but:{
        width:300,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C5C1AA',
        borderRadius:5,
    },
    btnText:{
        fontSize:35,
        color:'#fff',
    },
    row:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    header:{
        height:150,
        paddingVertical:10,
        width:'100%',
    },
    headerLeft:{
        height:'100%',
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    headerRight:{
        height:200,
        alignItems:'center'
    },
    content:{
        flex:1,
    },
    contentLeft:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    contentRight:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
    member:{
        backgroundColor:'#85C418',
    },
    noMember:{
        backgroundColor:'#FF9F00',
    }

})

export default styles