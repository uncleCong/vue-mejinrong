<template>
    <div id="product" :class="{done:statue == 2}">
        <div class="productContent">
            <p>{{product_name}}
                <span>{{product_type_name}}</span>
            </p>
            <div data-wrap="layout" class="productInfo">
                <div data-item="col-4">
                    {{invest}}<b>%</b>
                </div>
                <div data-item="col-4">
                    {{month}}<b>个月</b>
                </div>
                <div data-item="col-4">
                    <button @click='buy($event)'>投资</button>
                </div>
            </div>
            <div class="percent">
                <div :style="{width:step*100+'%'}"></div>
            </div>
            <div data-wrap="layout" class="develop">
                <div data-item="col-6">{{start_invest_money}}元起投/{{describe}}</div>
                <div data-item="col-6">{{surplusInvestMoney}}元/{{totalMoney}}元</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:[
            'product_name',
            'product_type_name',
            'newYears_income',
            'month',
            'invest',
            'start_invest_money',
            'describe',
            'surplusInvestMoney',
            'totalMoney',
            'statue',
            'step'
        ],
        methods:{
            buy(e){
                this.$emit('toBuy',e);
            }
        }
    }
</script>

<style scoped>
 #product{
     border-bottom:5px solid #f6f6f6;
 }
 .productContent{
     width:92%;
     height:115px;
     margin:0 auto;
     padding-top:5px;
 }
 .productContent p{
    font-size:14px;
    text-align: left;
    font-size:14px;
    color:#5f5f5f;
    font-weight:bold;
    padding:5px 0;
    border-bottom:1px solid #e8e8e8;
    position: relative
 }
 .productContent p span{
     display: inline-block;
     font-size:.4rem;
     padding:2px;
     border:1px solid #ff4c4c;
     border-radius:3px;
     color:#ff4c4c;
     position: absolute;
     right:0;
     top:0
 }
 .productInfo{
     padding:15px 0;
 }
  .productInfo div:nth-child(1){
      text-align: left;
      color:#ff4c4c;
      font-weight: bold;
      font-size:20px;
  }
  .productInfo div:nth-child(1) b{
      font-size:12px;
      font-weight: normal
  }
  .productInfo div:nth-child(2){
      text-align: left;
      color:#5f5f5f;
      font-weight: bold;
      font-size:20px;
  }
   .productInfo div:nth-child(2) b{
       font-size:14px;
   }
   .productInfo div:nth-child(3){
      text-align: right;
      color:#fff;
      font-weight: bold;
      font-size:20px;
  }
  .productInfo div:nth-child(3) button{
      width:60px;
      height:20px;
      background:#ff4c4c;
      border:none;
      outline: none;
      font-size:12px;
      border-radius:5px;
  }
  .done .productInfo div:nth-child(3) button{
      background:#ccc;
  }
  .percent{
      width:100%;
      height:3px;
      background:#ccc;
      border-radius:3px;
      position: relative
  }
  .percent div{
      position: absolute;
      left:0;
      top:0;
      height:100%;
      background:#ff4c4c;
      border-radius:3px;
  }
  .develop{
      font-size:12px;
      padding-top:5px;
      padding-bottom:5px;
  }
  .develop div:nth-child(1){
      text-align: left;
  }
  .develop div:nth-child(2){
      text-align: right;
  }
  .done .productContent p span{
      color:#dddcdd;
      border-color:#dddcdd;
  }
  .done .productInfo div:nth-child(1){
      color:#dddcdd;
  }
  .done .percent div{
      background: #dddcdd;
  }
  .done .productContent p{
      color:#dddcdd
  }
  .done .productInfo div:nth-child(2){
      color:#dddcdd
  }
  .done .develop{
      color:#dddcdd
  }
</style>