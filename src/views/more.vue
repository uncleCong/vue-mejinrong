<template>
    <div>
        <div class="block">
            <list
                iconName ="me-ion-search"
                listName="网贷知识"
                iconColor='#0fb3b9'>
            </list>
        </div>
        <div class="block">
            <list
                iconName ="me-ion-paper-airplane"
                listName="品牌介绍"
                iconColor='purple'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-briefcase"
                listName="安全保障"
                iconColor='#fdd600'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-help-circled"
                listName="帮助中心"
                iconColor='#e44251'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-heart"
                listName="客服中心"
                iconColor='#a55bb5'
                isBtm="true">
            </list>
            <list
                iconName ="me-ion-thumbsup"
                listName="关于我们"
                iconColor='#0f918f'>
            </list>
        </div>
        <div>
            <list
                iconName ="me-ion-happy"
                listName="在线客服"
                iconColor='#f9548e'
                isBtm="true">
            </list>
             <list
                iconName ="me-ion-upload"
                :listName="statue"
                iconColor='#0cb161'
                @toogleLogin="switchStatue"
                >
            </list>
        </div>
        <navMenu></navMenu>
    </div>
    
</template>
<style>
    .block{
        border-bottom:5px solid #f6f6f6;
    }
</style>
<script>
    import navMenu from '../components/nav'
    import list from '../components/list';
    import { getData } from '../lib/config.js';
    import { cookie } from '../lib/utils';

    export default {
        computed: {
        },
        data(){
            return {
                statue:"登录"
            }
        },
        components:{
            list,
            navMenu
        },
        methods: {
            switchStatue(){
                var _this = this;
                if(this.statue == "登录"){
                    this.$root.go("/login")
                }else{
                    getData({
                        key: 'loginOut',
                        method:'post',
                        data:{
                            tokenid : cookie.getItem("tokenid")
                        },
                        callback: function (res) {
                            if(res.code == '000'){
                                cookie.removeItem('tokenid');
                                _this.$toast("退出成功", function () {
                                    window.location.reload();
                                })
                            }
                        }
                    })
                }
            }
        },
        mounted(){
            if(!cookie.getItem("tokenid")){
                this.statue = "登录"
            }else{
                this.statue = "退出"
            }
        }
    }
   

</script>