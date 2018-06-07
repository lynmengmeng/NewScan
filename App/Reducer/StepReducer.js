const defaultState = {
    currentPosition:0,
    isShowStep:true
}

const stepReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'changeStepPosition':{
            return{
                ...state,
                currentPosition:action.index,
                isShowStep:action.bool
            }
        }
        default:
            return state;
    }
}

export default stepReducer;