const defaultState = {
    isShowMember:false,//是否显示会员弹框
    memberInfo:null,//会员信息
}

const memberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'isShowMember':{
            return{
                ...state,
                isShowMember:action.bool
            }
        }
        case 'queryMember':{
            return{
                ...state,
                memberInfo:action.json
            }
        }
        default:
            return state;
    }
}

export default memberReducer;