export default {
    //加载框
    isShowLoading(bool) {
        return{
            type:'isShowLoading',
            bool
        }
    },
    //进步器
    changeStepPosition(bool,index){
        return{
            type:'changeStepPosition',
            bool,
            index,
        }
    },
    //会员框
    isShowMember(bool){
        return{
            type:'isShowMember',
            bool
        }
    },
    //商品集合
    setGoodsList(json){
        return{
            type:'setGoodsList',
            json
        }
    },
    //清空商品集合
    clearGoodsList(){
        return{
            type:'clearGoodsList'
        }
    },
    //删除商品
    deleteGoods(index){
        return{
            type:'deleteGoods',
            index
        }
    },
    //计算整单
    calcOrder(json){
        return{
            type:'calcOrder',
            json
        }
    },
    //最后一个商品时清空商品价格
    clearPrice(){
        return{
            type:'clearPrice'
        }
    },
    //查询会员
    queryMember(json){
        return{
            type:'queryMember',
            json
        }
    }
}