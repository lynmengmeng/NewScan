const defaultState = {
    isShowLoading:false
}

const loadingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'isShowLoading':{
            return{
                ...state,
                isShowLoading:action.bool
            }
        }
        default:
            return state;
    }
}

export default loadingReducer;