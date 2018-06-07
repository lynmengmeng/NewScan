import React, {Component} from 'react';
import Router from './Router'
import {Provider} from 'react-redux';
import Store from './Store'
import {View} from 'react-native';
import Loading from './Container/LoadingContainer'
import Footer from './Common/Footer'
import Help from './Common/Help'
class App extends Component {
    componentDidMount() {
        console.disableYellowBox = true;
    }
    render() {
        return (
            <Provider store={Store}>
                <View style={{flex: 1}}>
                    <Router/>
                    <Loading/>
                    <Footer/>
                    <Help/>
                </View>
            </Provider>
        );
    }
}

export default App
