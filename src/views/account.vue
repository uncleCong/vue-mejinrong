<template>
    <div class="accountBody clearfix">
        <div class="account">
            <div class="header">
                <p class="setting" @click="goSetting">设置</p>
                <div>
                    <div class="headImg">
                        <img :src="userInfo.url">
                    </div>
                    <p class="tel">{{userInfo.phone_number}}</p>
                </div>
                <div data-wrap="layout" class="userInfo">
                    <div data-item="col-6" v-show="userInfo.is_realname == 1">
                        <i class="me-ion-person"></i>
                        <span>已实名认证</span>
                    </div>
                    <div data-item="col-6" v-show="userInfo.is_realname == 0">
                        <i class="me-ion-person"></i>
                        <span>未实名认证</span>
                    </div>
                    <div data-item="col-6" v-show="userInfo.is_binding == 1">
                        <i class="me-ion-filing"></i>
                        <span>已绑定邮箱</span>
                    </div>
                    <div data-item="col-6" v-show="userInfo.is_binding == 0">
                        <i class="me-ion-filing"></i>
                        <span>未绑定邮箱</span>
                    </div>
                </div>
            </div>
            <div data-wrap="layout" class="asset">
                <div data-item="col-4">
                    <p>总资产(元)</p>
                    <p>{{accountInfo.jd_total_assets}}</p>
                </div>
                <div data-item="col-4">
                    <p>累计收益(元)</p>
                    <p>{{accountInfo.earning}}</p>
                </div>
                <div data-item="col-4">
                    <p>昨日收益(元)</p>
                    <p>{{accountInfo.previous_earning}}</p>
                </div>
            </div>
        </div>
        <div class="balance clearfix">
            <div>可用余额</div>
            <div>{{accountInfo.balance}}</div>
        </div>
        <div class="block">
            <list
                iconName ="me-ion-person"
                listName="我的项目"
                iconColor='#19c8ce'
                isBtm="true">
            </list>
             <list
                iconName ="me-ion-folder"
                listName="江西存管"
                iconColor='#9739b6'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-clipboard"
                listName="资金记录"
                iconColor='#f62b69'>
            </list>
        </div>
         <div>
            <list
                iconName ="me-ion-bag"
                listName="我的福利"
                iconColor='#f65016'
                isBtm="true">
            </list>
             <list
                iconName ="me-ion-podium"
                listName="我的邀请码"
                iconColor='#c9603b'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-chatbubbles"
                listName="消息中心"
                iconColor='#12a5f1'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-document"
                listName="客户资料"
                iconColor='#ff771c'>
            </list>
        </div>
        <navMenu></navMenu>
    </div>
</template>

<style>
    .accountBody{
        background:#f6f6f6;
    }
    .account {
        background-color: #ff4c4c;
    }
    
    .header {
        background-color: #ff4c4c;
        padding: 10px 10px 0;
        color: #fff;
        text-align: center;
    }
    
    .header .setting {
        text-align: right;
        padding-right: 20px;
    }
    
    .headImg {
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
    
    .tel {
        margin-top: 5px;
        font-size: 14px;
        font-weight: bold;
    }
    
    .userInfo {
        width: 50%;
        margin: 0 auto;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .userInfo i {
        font-size: 16px;
    }
    
    .userInfo span {
        position: relative;
        top: -2px;
    }
    
    .asset {
        background: #ff4c4c;
        background-color: hsla(0, 0%, 44%, .15);
        color: #fff;
        padding: 5px 0;
    }
    
    .asset div:nth-child(3) p {
        border-right: none;
    }
    
    .asset div p {
        border-right: 1px solid #fff;
        padding: 3px 0;
    }
    .balance{
        background:#fff;
        padding:0px 20px;
        margin-top:8px;
        margin-bottom:8px;
    }
    .balance div:first-child{
        float:left;
        padding:10px 0;
    }
     .balance div:nth-child(2){
        float:right;
        padding:10px 0;
        font-size:18px;
        color:#999;
    }
    .block{
        margin-bottom:8px;
    }
</style>

<script>
    import navMenu from '../components/nav'
    import list from '../components/list';
    import { getData } from '../lib/config.js';
    import { cookie } from '../lib/utils';

    export default {
        components:{
            list,
            navMenu
        },
        data(){
            return {
                userInfo:{},
                accountInfo:{}
            }
        },
        methods:{
            goSetting:function(){
                this.$root.go("setting")
            }
        },
        mounted(){
            var _this = this;
            if(!cookie.getItem("tokenid")){
                _this.$root.go("/login");
            }
            getData({
                key: 'jdsafeauth',
                method:'post',
                data:{
                    tokenid : cookie.getItem("tokenid")
                },
                callback: function (res) {
                   _this.userInfo = res;
                }
            })
            getData({
                key: 'myaccount_pc',
                method:'post',
                data:{
                    tokenid : cookie.getItem("tokenid")
                },
                callback: function (res) {
                   _this.accountInfo = res;
                }
            })
        }
    }

</script>