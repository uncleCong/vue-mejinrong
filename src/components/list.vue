<template>
    <div class="more">
        <a href="javascript:;" :class="{btm:isBtm}" @click="toogleLogin">
            <em :class="iconName" :style="{color:iconColor}"></em>
            <span>{{listName}}</span>
            <span class="showContent" v-show="isContentShow">{{isContent}}</span>
            <i class="icon-array-right me-ion-o-arrow-right" v-show="isArrow == 'true'"></i>
        </a>
    </div>
</template>

<style scoped>
    .more {
        padding-left: 4%;
        background:#fff;
    }
    
    .more a {
        position: relative;
        padding: 20px 0;
        display: block;
        color: #5f5f5f;
        font-size: 14px;
        height: 52px;
        line-height: 14px;
        text-align: left;
    }
    
    .more a em {
        font-size: 20px;
        color: green;
        display: block;
        float: left;
    }
    
    .more a span {
        display: block;
        float: left;
        line-height: 20px;
        margin-left: 3%;
    }
    .showContent{
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
        color:#8e8e8e;
    }
   .icon-array-right {
        width: 10px;
        height: 25px;
        background-size: 100% 100%;
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        font-size:25px;
        color:#ddd;
    }
    .btm{
        border-bottom: 1px solid #ddd;
    }
</style>

<script>
    export default{
        data(){
            return {
            }
        },
        props:{
            isArrow:{default:true},
            iconName:{},
            listName:{},
            show:{},
            iconColor:{},
            isBtm:{},
            isContent:{},
            isContentShow:{default:false}
        },
        methods:{
            toogleLogin(){
                this.$emit('toogleLogin');
            }
        }
    }
</script>