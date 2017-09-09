<template>
    <div class="loginContent">
        <img src="../assets/logo.jpg" alt="">
        <div data-type="icon">
            <i class="me-ion-person"></i>
            <input type="text" placeholder="输入用户名" v-model="userName">
        </div>
        <div data-type="icon">
            <i class="me-ion-o-toggle"></i>
            <input type="text" placeholder="输入密码" v-model="passWord">
        </div>
        <div class="me-u-btn" data-size="block" data-color="red" v-on:click="greet">登录</div>
    </div>
</template>

<script>
    import { getData } from '../lib/config.js';
    import { cookie } from '../lib/utils';
    import md5 from '../lib/md5.js';

    export default {
        data: function () {
            return {
                userName: '',
                passWord: '',
                errorMsg: '请将信息填写完整'
            }
        },
        name: 'login',
        methods: {
            greet: function (event) {
                var _this = this;
                getData({
                    key: 'login',
                    data: {
                        version: '3.7.2',
                        logintel: this.userName,
                        password: md5(this.passWord),
                        channel: 'h5'
                    },
                    method: 'post',
                    callback: function (res) {
                        if(res.code == "000"){
                            cookie.setItem("tokenid",res.tokenid)
                            _this.$root.go("/account")
                        }else{
                            _this.$toast(res.msg)
                        }
                    }
                })
            }
        }
    }

</script>

<style scoped>
    .loginContent{
        width:80%;
        margin:0 auto;
        padding-top:20px;
    }
    img{
        width:70%;
        margin-top:50px;
        margin-bottom:50px;
    }
    input {
        display: block;
        width: 50%;
        height: 30px;
        margin: 0 auto;
        border: 1px solid #eee;
        outline: none;
        margin-bottom: 10px
    }
    
    button {
        display: block;
        width: 50%;
        height: 40px;
        margin: 0 auto;
        background: #ff4c4c;
        line-height: 40px;
        text-align: center;
        border: none;
        outline: none;
        color: #fff;
        font-size: 14px;
    }
</style>