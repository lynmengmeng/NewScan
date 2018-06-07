import {StackNavigator} from 'react-navigation'
import Login from './Container/LoginContainer'
import Home from './Container/HomeContainer'
import Sale from './Container/SaleContainer'
import Pay from './Container/PayContainer'
const AppNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Sale: {
        screen: Sale,
        navigationOptions: {
            header: null
        }
    },

    Pay: {
        screen: Pay,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
})

export default AppNavigator