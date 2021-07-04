import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    logo:{
        height:150,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    logoImage: {
        width: 128,
        height: 128,
        resizeMode: 'contain',
    },
    form: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    input: {
        width: 300,
        height: 50,
        paddingLeft: 10,
        marginLeft: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
    },
    loginButton: {
        width: 300,
        height: 40,
        backgroundColor: '#585858',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 40,
    },
    loginText: {
        color: '#fff',
        fontSize: 20,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        lineHeight: 40,
    }
});

module.exports = styles;
