<template>
    <div class="tab">
        <div class="tabMenu">
            <div v-for="(item,index) in listItem" :class="{active:activeIndex == index}" @click="changeTab(index)">{{item}}</div>
        </div>
        <div class="tabContent">
            <div v-for="(item,index) in contentItem" v-show="activeIndex == index">{{item}}</div>
        </div>
    </div>
</template>

<style scoped>
    .tab{
        width:100%;
        height:400px;
    }
    .tab .tabMenu{
        width:100%;
        height:50px;
        background:#ccc;
    }
    .tab .tabMenu div{
        width:80px;
        float:left;
        line-height:50px;
        text-align: center;
        color:#fff
    }
    .tab .tabMenu div.active{
        border-bottom:2px solid #ff4c4c;
    }
    .tab .tabContent{
        width:100%;
        clear: both;
        position: relative
    }
    .tab .tabContent div{
        text-align:left;
        color:#999;
        padding-top:10px;
        position: absolute;
        left:0;
        top:0;
    }
</style>

<script>
export default {
    data(){
        return {
            listItem:['menu1','menu2','menu3','menu4'],
            contentItem:['tab1内容','tab2内容','tab3内容','tab4内容'],
            activeIndex:2
        }
    },
    methods:{
        changeTab (i){
            this.activeIndex = i;
        }
    }
}
</script>