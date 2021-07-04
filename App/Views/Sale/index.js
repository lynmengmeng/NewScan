import React, {Component} from 'react';
import {
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    Alert,
    TextInput
} from 'react-native';
import Step from '../../Container/StepContainer'
import styles from '../../Styles/sale'
import Member from '../../Container/MemberContainer'

export default class Sale extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            barCode: ''
        };
    }

    renderGoodsItem(item, index) {
        return (
            <View style={styles.saleSty5}>
                <Text style={styles.itemList}>{index + 1}</Text>
                <Text style={[styles.itemList, [{flex: 2}]]}>{item.gname}</Text>
                <Text style={styles.itemList}>{item.amount}</Text>
                <Text style={styles.itemList}>{item.price}</Text>
                <Text style={styles.itemList}>{(item.item_value - item.disc_value).toFixed(2)}</Text>
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => {
                        Alert.alert(
                            '确定删除该商品？',
                            '',
                            [
                                {
                                    text: '取消', onPress: () => {
                                    }, style: 'cancel'
                                },
                                {text: '确定', onPress: this.props.deleteGoods.bind(this, index)},
                            ],
                            {cancelable: false}
                        )
                    }}
                >
                    <Text style={styles.itemList}>
                        <Image source={require('../../Assets/image/icon5.png')}/>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                {this.props.isShowMember ? <Member/> : null}
                <View style={styles.saleSty15}>
                    <Step/>
                </View>
                <View style={styles.saleSty1}>
                    <TouchableOpacity
                        onPress={(this.props.cancelDeal.bind(this))}
                        style={styles.saleSty2}
                    >
                        <Image
                            source={require('../../Assets/image/icon7.png')}
                            resizeMode='center'
                        />
                        <Text style={styles.saleSty3}>放弃交易</Text>
                    </TouchableOpacity>
                    {
                        this.props.memberInfo?<View>
                            <Text>会员名称：{this.props.memberInfo.guestname}</Text>
                            <Text>会员卡号：{this.props.memberInfo.cardno}</Text>
                            <Text>零钱：{this.props.memberInfo.carddetail}</Text>
                            <Text>积分：{this.props.memberInfo.point}</Text>
                        </View>:null
                    }
                    <TextInput
                        placeholder='输入商品编码'
                        style={styles.saleSty16}
                        underlineColorAndroid="transparent"
                        keyboardType='numeric'
                        autoFocus={true}
                        onChangeText={(barCode) => {
                            this.setState({barCode});
                        }}
                        ref='contain'
                        value={this.state.barCode}
                        onSubmitEditing={this.props.queryGoods.bind(this)}
                    />
                </View>
                <View style={styles.saleSty4}>
                    <Text style={styles.itemCap}>序号</Text>
                    <Text style={[styles.itemCap, [{flex: 2}]]}>商品名称</Text>
                    <Text style={styles.itemCap}>数量</Text>
                    <Text style={styles.itemCap}>单价</Text>
                    <Text style={styles.itemCap}>金额</Text>
                    <Text style={styles.itemCap}></Text>
                </View>
                <View style={styles.saleSty6}>
                    <FlatList
                        data={this.props.goodsList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => this.renderGoodsItem(item, index)}
                    />
                </View>
                <View style={styles.saleSty7}>
                    <View><Text>购物袋</Text></View>
                    <View style={styles.saleSty8}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../Assets/image/icon8.png')}
                                resizeMode='center'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 30}}>
                            <Image
                                source={require('../../Assets/image/icon9.png')}
                                resizeMode='center'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.saleSty9}>
                    <View style={styles.saleSty10}>
                        <Text style={styles.textSize}>优惠：¥ {this.props.disc.toFixed(2)}</Text>
                        <Text style={styles.saleSty12}>应收金额：¥</Text>
                        <Text style={styles.saleSty11}> {this.props.total.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.saleSty13}>
                    <TouchableOpacity
                        onPress={this.props.submitPay.bind(this)}
                        underlayColor='rgba(0,0,0,0.1)'
                    >
                        <Text style={styles.saleSty14}>支付</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}