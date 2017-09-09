<template>
    <div class="block">
        <el-carousel trigger="click" height="150px" arrow="always">
            <el-carousel-item v-for="item in switchData" :key="item">
                <!--<h3>{{ item }}</h3>-->
                <img :src="item" alt="" class="switchImg">
            </el-carousel-item>
        </el-carousel>
        <div data-wrap="layout" class="dataAll">
            <div data-item="col-6">累计投资：<span>{{AllInvest}}</span></div>
            <div data-item="col-6">累计注册：<span>{{AllRegister}}</span></div>
        </div>
        <div data-wrap="layout" class="iconList">
            <div v-for="item in iconList" :data-item="colLength">
                <img :src="item.pic_url" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>

        <ListTitle titleName="新手专享" v-show="showBussiness == 1"></ListTitle>
        <product v-for="(newProduct,index) in newProducts"
                :key="newProduct.id"
                :product_name=newProduct.product_name 
                :product_type_name=newProduct.product_type_name 
                :invest=newProduct.newYears_income 
                :month=newProduct.period
                :start_invest_money=newProduct.start_invest_money
                :describe=newProduct.describe
                :surplusInvestMoney=newProduct.surplusInvestMoney
                :totalMoney=newProduct.totalMoney
                :step=(newProduct.totalMoney-newProduct.surplusInvestMoney)/newProduct.totalMoney
                @toBuy="goBuy(newProduct.id)"
            v-show="showBussiness == 1"></product>

        <ListTitle titleName="Me" v-show="showBussiness == 1"></ListTitle>
        <product v-for="(product,index) in products"
                :key="product.id"  
                :product_name=product.product_name 
                :product_type_name=product.product_type_name 
                :invest=product.newYears_income 
                :month=product.period
                :start_invest_money=product.start_invest_money
                :describe=product.describe
                :surplusInvestMoney=product.surplusInvestMoney
                :totalMoney=product.totalMoney
                :statue=product.status
                :step=(product.totalMoney-product.surplusInvestMoney)/product.totalMoney
            @toBuy="goBuy(product.id)"
            v-show="showBussiness == 1"
            ></product>

        <ListTitle titleName="标的"></ListTitle>
        <product v-for="(bid,index) in bids"
                :key="bid.bid_id" 
                :product_name=bid.loan_title 
                :product_type_name=bid.loan_type 
                :invest=bid.newYear_reat 
                :month=bid.loan_times
                :start_invest_money=bid.start_invest_money
                :describe=bid.describe
                :surplusInvestMoney=bid.surplusInvestMoney
                :totalMoney=bid.totalMoney
                :statue=bid.status
                :step=(bid.totalMoney-bid.surplusInvestMoney)/bid.totalMoney
                @toBuy="goBuy(bid.bid_id)">
        </product>
        <navMenu></navMenu>
    </div>
</template>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    
    .switchImg {
        width: 100%
    }
    
    .dataAll {
        font-size: 12px;
        border-bottom: 1px solid #eee;
    }
    
    .dataAll div:first-child {
        border-right: 1px solid #eee;
    }
    
    .dataAll div {
        padding: 10px 0;
    }
    
    .iconList {
        padding: 15px 0;
    }
    
    .iconList img {
        width: 30%;
    }
    
    .iconList p {
        font-size: 12px;
        color: #5f5f5f
    }
</style>

<script>
    // 加载首页组件
    import navMenu from '../components/nav';
    import ListTitle from '../components/title';
    import product from '../components/product';
    import { getData } from '../lib/config.js';

    export default {
        data: function () {
            return {
                switchData: [],
                AllInvest: '',
                AllRegister: '',
                iconList: '',
                colLength: '',
                bids: [],
                newProducts: [],
                products: [],
                showBussiness:"0",
            }
        },
        components:{
            navMenu,ListTitle,product
        },
        methods: {
            goBuy: function (n) {
                // 购买方法
                this.$root.go("detail",{id:n})
            }
        },
        mounted: function () {
            var _this = this;
            // 读取banner图
            getData({
                key: 'banner',
                callback: function (res) {
                    for (var i = 0; i < res.banner_urls.length; i++) {
                        _this.switchData.push(res.banner_urls[i].pic_url)
                    }
                }
            })
            // 读取平台数据
            getData({
                key: 'turnoverdetail',
                callback: function (res) {
                    _this.AllInvest = res.dealAmountThousand;
                    _this.AllRegister = res.tradeNum;
                }
            })
            // 读取icon列表getIconList
            getData({
                key: 'getIconList',
                callback: function (res) {
                    _this.iconList = res.banner_urls;
                    _this.colLength = "col-" + 12 / _this.iconList.length;
                }
            })
            // 获取首页产品数据
            getData({
                key: 'index',
                callback: function (res) {
                    _this.bids = res.bids;
                    _this.newProducts = res.newProducts;
                    _this.products = res.products;
                    _this.showBussiness = res.show_business
                }
            })
            // this.$toast("hello world", function () {
            //     console.log("回调完成")
            // })
        }
    }

</script>