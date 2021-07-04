import moment from "moment/moment";

let shopid = 'A00Q'
let pos_id = 'P001'
let listno = 1

export default {
    listno:1,   //流水号
    shopid:'A00Q',  //门店编号
    pos_id:'P001',  //终端编号 收银机号
    pos_mac:'1231231',  //设备mac地址，格式为aa-aa-dd-dd
    sheetid:shopid + pos_id + moment().format('YYYYMMDD')+(listno/Math.pow(10,6)).toFixed(6).substr(2) //单号
}
