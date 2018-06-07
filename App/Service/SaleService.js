import NetUtils from '../Common/NetUtils';
import Overall  from '../Common/CrHome'
import moment from "moment/moment";

export default {
    //查询商品
    queryGoods(numberid) {
        let reqData = JSON.stringify({
            shopid:Overall.shopid,  //门店编号
            levelid:-1, //会员级别（非会员-1)
            numberid, //商品编码或条码（根据长度判断，长度为7位及以下的是商品编码，8位至26位的为商品条码）
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
                    <NS2:ESB_SERVICE_ID>2W020000000006</NS2:ESB_SERVICE_ID>
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
    },

    //计算整单
    calcOrder(goodslist) {
        let reqData = JSON.stringify({
            shopid:Overall.shopid,  //门店编号
            posid:Overall.pos_id,   //台号
            sheetid:Overall.sheetid, //单号
            memberid:'0', //会员号（非会员0）
            levelid:-1, //会员级别（非会员-1)
            flag:0,    //0=不需要计算会员折扣；1=需要计算会员折扣
            goodslist    //商品明细
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
                    <NS2:ESB_SERVICE_ID>2W020000000007</NS2:ESB_SERVICE_ID>
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
    },


    //查询会员
    queryMember(number){
        let reqData = JSON.stringify({
            number,
            shopid:Overall.shopid,  //门店编号
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
                    <NS2:ESB_SERVICE_ID>2W020000000001</NS2:ESB_SERVICE_ID>
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