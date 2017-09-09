<template>
    <div class="block">
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
            :step=(bid.totalMoney-bid.surplusInvestMoney)/bid.totalMoney
            :statue=bid.status
            @toBuy="goBuy(bid.bid_id)">
        </product>
        <div class="loadMore" @click="getListData($event)" v-show="showMore">加载更多</div>
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
    .loadMore{
        background:transparent;
        font-size:12px;
        color:#ff4c4c;
        padding:5px 0;
    }
</style>

<script>
    // 加载首页组件
    import navMenu from '../components/nav'
    import product from '../components/product'
    import { getData } from '../lib/config.js';
    import { getStyle } from '../lib/utils';

    export default {
        data: function () {
            return {
                bids: [],
                current: 1,
                showMore:false
            }
        },
        components: {
            navMenu, product
        },
        methods: {
            goBuy (n) {
                this.$root.go("detail",{id:n})
            },
            getListData (e) {
                var _this = this;
                if(e){
                    var loadDom = e.target;
                    loadDom.innerHTML = "加载中...";
                }
                getData({
                    key: 'bids',
                    method: 'post',
                    data: {
                        current: _this.current,
                        tokenid: '',
                        version: '3.7.2',
                        channel: 'h5'
                    },
                    callback: function (res) {
                        _this.bids = _this.bids.concat(res.list);
                        _this.current++;
                        _this.showMore = true;
                        if(res.list.length > 0){
                            if(loadDom) loadDom.innerHTML = "加载更多";
                        }else{
                            if(loadDom) loadDom.innerHTML = "没有更多了!";loadDom.style.color="#dddcdd";
                        }
                        
                    }
                })
            }
        },
        mounted: function () {
            this.getListData();
        }
    }

</script>