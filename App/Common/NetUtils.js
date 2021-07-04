import Actions from '../Action'
import Store from '../Store'
import {ToastAndroid} from 'react-native'
let XMLParser = require('react-xml-parser');
export default {
    HttpPostServer(reqData, callBack) {
        Store.dispatch(Actions.isShowLoading(true))
        console.log(reqData);
        fetch('http://120.236.34.78/esbag/EsbService',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/html, application/xhtml+xml, */*',
                    'Content-Type': 'application/json'
                },
                body: reqData
            })
            .then((response) => {
                console.log(response)
                if (response.ok) {
                    return response.text()
                }
                else {
                    ToastAndroid.showWithGravity('网络请求失败',ToastAndroid.LONG,ToastAndroid.TOP)
                }
            })
            .then((data) => {
                console.log(data);
                let xml = new XMLParser().parseFromString(data);
                let resJson = xml.children[0].children[0].children;
                console.log(xml.children[0].children[0].children);
                Store.dispatch(Actions.isShowLoading(false))
                if (resJson[1].value) {
                    callBack(resJson);
                }
                else {
                    ToastAndroid.showWithGravity(resJson[2].value,ToastAndroid.LONG,ToastAndroid.TOP)
                    callBack(null);
                }
            })
            .catch(error => {
                    console.log(error);
                    Store.dispatch(Actions.isShowLoading(false))
                    ToastAndroid.showWithGravity('网络请求失败',ToastAndroid.LONG,ToastAndroid.TOP)
                    callBack(null);
                }
            );
    },
    sendRequest(reqData) {
        return new Promise((resolve, reject) => {
            this.HttpPostServer(reqData, (resData) => {
                resolve(resData);
            });
        });
    },
}