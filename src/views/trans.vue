<template>
    <div>
        <input type="text" class="inp" placeholder="点击搜索" @click="search">
        <div class="menu" v-if="showMask" @click="search">
            <div class="right" v-bind:class="{showRight:showMask}">

            </div>
        </div>
    </div>
</template>

<style>
    .inp {
        border: 1px solid #ff4c4c;
        border-radius: 5px;
        margin-top: 3px;
        width: 90%;
        margin: 0 auto;
        color: #9f9f9f;
        text-align: center;
        border-radius: 20px;
        font-size: .7em;
        background: #fee6ed;
        padding: .5em 1em .5em 1em;
        outline: none
    }
    .menu{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.3);
        position: fixed;
        top:0
    }
    .right {
        width: 300px;
        height: 100%;
        position: fixed;
        background: #fff;
        top: 0;
        right: 0;
        z-index: 9991;
        transform: translateX(300px);
    }
    .showRight{
        transform: translateX(0);
        transition: all 1s;
    }
</style>

<script>
    export default {
        data(){
            return {
                showMask : false
            }
        },
        methods:{
            search(){
                this.showMask = !this.showMask;
            }
        }
    }
</script>