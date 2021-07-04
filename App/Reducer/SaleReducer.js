

const defaultState = {
    goodsList:[],
    total:0, //折后应收金额
    ysje:0,  //折前应收金额
    disc:0  //优惠金额
}

const saleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'setGoodsList':{
            return{
                ...state,
                goodsList:[...state.goodsList, action.json],
                total: state.total + (action.json.item_value - action.json.disc_value),
                ysje: state.ysje + action.json.item_value,
                disc: state.disc + action.json.disc_value
            }
        }
        case 'clearGoodsList':{
            return{
                ...state,
                goodsList:[],
                disc:0,
                ysje:0,
                total:0,
            }
        }
        case 'deleteGoods':{
            state.goodsList.splice(action.index,1)
            return{
                ...state,
                goodsList:[...state.goodsList]
            }
        }
        case 'calcOrder':{
            return{
                ...state,
                disc:action.json.totaldisc,
                ysje:action.json.collectionMoney,
                total:action.json.realityMoney,
                goodsList:[...action.json.goodslist],
            }
        }
        case 'clearPrice':{
            return{
                ...state,
                disc:0,
                ysje:0,
                total:0,
            }
        }
        default:
            return state;
    }
}

export default saleReducer;