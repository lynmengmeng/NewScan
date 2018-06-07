import NetUtils from '../Common/NetUtils';
import moment from "moment/moment";
import Overall  from '../Common/CrHome'
export default {
    // 操作员登录
    doLogin() {
        let reqData = JSON.stringify({
            shopid:Overall.shopid,//门店编号
            pos_id:Overall.pos_id,//终端编号 收银机号
            cashier_id:'9006',//收银员账号
            passwd:'9006',//密码
            pos_mac:Overall.pos_mac,//设备mac地址，格式为aa-aa-dd-dd
            operationTime:moment().format('YYYY-MM-DD HH:mm:ss'),//登陆日期时间戳，格式为yyyy-mm-dd HH:mm:ss，时区为GMT+8
            listno:Overall.listno//流水号  作为订单上传记录流水
        });
        let reqData1 = `
            <NS1:Envelope xmlns:NS1="http://schemas.xmlsoap.org/soap/envelope/">  
              <NS1:Body> 
                <NS2:REQUEST xmlns:NS2="http://w3.ibm.com/gbs/ais/ei/esb">  
                  <NS2:ESB_ATTRS> 
                    <NS2:ESB_SID>2W02</NS2:ESB_SID>  
                    <NS2:ESB_USER>2W02</NS2:ESB_USER>  
                    <NS2:ESB_PWD>sub</NS2:ESB_PWD>  
                    <NS2:ESB_SN>1513062900802</NS2:ESB_SN>  
                    <NS2:MAC/>  
                    <NS2:ESB_SERVICE_ID>2W020000000012</NS2:ESB_SERVICE_ID>
                    <NS2:ARG_1/>  
                    <NS2:ARG_2/>  
                    <NS2:ARG_3/>  
                    <NS2:ARG_4/>  
                    <NS2:ARG_5/> 
                  </NS2:ESB_ATTRS>  
                  <NS2:REQUEST_DATA>${reqData}</NS2:REQUEST_DATA> 
                </NS2:REQUEST> 
              </NS1:Body>
            </NS1:Envelope>
        `;
        return NetUtils.sendRequest(reqData1);
    }
}