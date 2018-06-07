import {createStore, combineReducers} from 'redux'
import homeReducer from '../Reducer/HomeReducer'
import saleReducer from '../Reducer/SaleReducer'
import loadingReducer from '../Reducer/LoadingReducer'
import stepReducer from '../Reducer/StepReducer'
import memberReducer from '../Reducer/MemberReducer'
import payReducer from '../Reducer/PayReducer'

const reducers = combineReducers({
    homeReducer,
    saleReducer,
    loadingReducer,
    stepReducer,
    memberReducer,
    payReducer
});

const store = createStore(reducers);

export default store;
