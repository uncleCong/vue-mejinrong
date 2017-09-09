<template>
    <div id="detailContainer">
        <div class="top">
            <i class="me-ion-o-arrow-left" @click="back"></i>
            <span>
            {{detail.protuct_name}}
        </span>
        </div>
        <div class="center clearfix">
            <p class="xieyi">协议年化利率</p>
            <p class="lilv"><b>{{detail.newYears_income}}</b>%</p>
            <p class="info"><span>{{detail.period}}个月项目期限</span><span>{{detail.start_invest_money}}元起投</span></p>
        </div>
        <div class="percent">
            <div style="width:50%"></div>
        </div>
        <div class="left">
            剩余可投金额<span>{{detail.surplus_invest_mone}}</span>元
        </div>
        <div data-wrap="layout" class="productInfo">
            <div data-item="col-6">
                <span class="me-ion-document-text"></span>
                <p>项目详情</p>
            </div>
            <div data-item="col-6">
                <span class="me-ion-umbrella"></span>
                <p>安全保障</p>
            </div>
        </div>
        <div class="amount clearfix">
            <p class="clearfix">
                <b class="me-ion-minus-round" @click="min"></b>
                <input type="text" @input="cauInvest($event)" v-model="buyAmount">
                <b class="me-ion-plus-round plus" @click="plus"></b>
            </p>
            <div data-wrap="layout" class="cauInfo">
                <div data-item="col-6">
                    <span class="me-ion-cash"></span>
                    <p>最高可投(元)</p>
                    <p class="maxAmount">{{detail.max_invest}}</p>
                </div>
                <div data-item="col-6">
                    <span class="me-ion-arrow-graph-up-right"></span>
                    <p>协议年化收益(元)</p>
                    <p class="maxAmount">{{computerInvest}}</p>
                </div>
            </div>
        </div>
        <button class="buyNow">立即购买</button>
    </div>
</template>

<style scoped>
    .top {
        padding: 14px 0;
        background: #ff4c4c;
        color: #fff;
        font-size: 16px;
        position: relative;
        font-weight: bold;
    }
    
    .top i {
        position: absolute;
        left: 20px;
        font-size: 25px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .center p.xieyi {
        font-size: 14px;
        color: #5f5f5f;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    
    .center p.lilv {
        color: #ff4c4c;
        font-size: 12px;
        position: relative;
    }
    
    .center p.lilv b {
        font-size: 60px;
        font-weight: normal;
        color: #ff4c4c;
    }
    
    .center p.lilv .tag {
        position: absolute;
        right: 50px;
        top: -30px;
        font-size: 12px;
        border: 1px solid #ff4c4c;
        padding: 2px 4px;
        border-radius: 3px;
    }
    
    .info {
        font-size: 14px;
        margin-top: 20px;
    }
    
    .info span {
        display: block;
        width: 49%;
        text-align: center;
        float: left;
        color: #4c4c4c;
        font-size: 12px;
    }
    
    .info span:first-child {
        border-right: 1px solid #4c4c4c;
    }
    
    .percent {
        width: 90%;
        margin: 20px auto 0;
        height: 3px;
        background: #ccc;
        border-radius: 3px;
        position: relative
    }
    
    .percent div {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #ff4c4c;
        border-radius: 3px;
    }
    
    .left {
        margin-top: 20px;
        font-size: 12px;
    }
    
    .left span {
        color: #ff4c4c;
    }
    
    .productInfo {
        margin: 10px 0;
        border-top: 1px solid #f6f6f6;
        padding-top: 10px;
        color: #5f5f5f;
        font-size: 12px;
    }
    
    .productInfo div:first-child {
        border-right: 1px solid #ccc;
    }
    
    .me-ion-document-text,
    .me-ion-umbrella {
        display: block;
        background-color: #ffc361;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: #fff;
        margin: 0 auto;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 10px;
    }
    
    .me-ion-umbrella {
        background: #fd7360;
    }
    
    .amount {
        padding-top: 8px;
        border-top: 8px solid #f6f6f6;
    }
    
    .amount b {
        display: block;
        width: 40px;
        height: 40px;
        background: #f5f5f5;
        color: #fff;
        border-radius: 50%;
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        float: left;
        margin-top: 30px;
    }
    
    .amount b:nth-child(1) {
        margin-left: 70px;
    }
    
    .amount b.plus {
        background: #ff4d4d;
    }
    
    .amount input {
        display: block;
        width: 150px;
        border: none;
        border-bottom: 1px dashed #ccc;
        outline: none;
        font-size: 30px;
        color: #999;
        float: left;
        margin-top: 30px;
        text-align: center;
        overflow: hidden;
        padding: 0 4px;
    }
    .cauInfo{
        color:#5f5f5f;
        margin-top:20px;
        font-size:14px;
    }
    .cauInfo span{
        font-size:30px;
        color:#ccc;
        margin-bottom:5px;
    }
    .buyNow{
        width:100%;
        height:50px;
        text-align: center;
        line-height: 30px;
        color:#fff;
        background:#ff4c4c;
        border:none;
        outline: none;
        margin-top:60px;
        position: fixed;
        bottom:0;
        left:0
    }
    .maxAmount{
        margin-top:10px;
    }
</style>

<script>
    import { getData } from '../lib/config.js';
     import { getStyle } from '../lib/utils.js';

    export default {
        data() {
            return {
                detail: {},
                computerInvest:'0.00',
                buyAmount:'0.00',
                step:0
            }
        },
        methods: {
            getDetail() {
                var _this = this;
                //  获取产品详情
                getData({
                    key: 'productdetail',
                    data: {
                        id: _this.$route.params.id
                    },
                    method: 'post',
                    callback: function (res) {
                        _this.detail = res;
                    }
                })
            },
            back() {
                window.history.go(-1);
            },
            cauInvest(e){
                this.computerInvest = (this.buyAmount*this.detail.newYears_income/100/12*this.detail.period).toFixed(2)
            },
            plus(){
                this.buyAmount = parseFloat(this.buyAmount)+parseFloat(this.detail.stepping)+'.00'
            },
            min(){
                if(parseFloat(this.buyAmount)-parseFloat(this.detail.stepping) < 0){
                    this.buyAmount = "0.00";
                    return;
                }
                this.buyAmount = parseFloat(this.buyAmount)-parseFloat(this.detail.stepping)+'.00'
            }
        },
        mounted() {
            this.getDetail();
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getDetail',
            'buyAmount':'cauInvest'
        }
    }

</script>