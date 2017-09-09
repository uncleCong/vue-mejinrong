<template>
    <div>
        <div class="block">
            <list iconName="me-ion-iphone" listName="绑定手机" iconColor='#f11acb' isContentShow=true isArrow=false isBtm=t rue v-bind:isContent="userInfo.phone_number">
            </list>
            <list iconName="me-ion-person" listName="实名认证" iconColor='#0fb3b9' isContentShow=true isArrow=false v-bind:isContent="userInfo.name">
            </list>
        </div>
        <div class="block">
            <list iconName="me-ion-briefcase" listName="银行存管" iconColor='#0b906f' isContentShow=true isArrow=true isBtm=t rue isContent="已开通">
            </list>
            <list iconName="me-ion-ribbon-b" listName="Me账户" iconColor='#ff4c4c' isContentShow=true isArrow=false isContent="未开通">
            </list>
        </div>
        <div class="block">
            <list iconName="me-ion-email" listName="电子邮箱" iconColor='#f0b73e' isContentShow=true isArrow=true isBtm=t rue v-bind:isContent="userInfo.cus_email">
            </list>
            <list iconName="me-ion-link" listName="联系地址" iconColor='#f4642b' isContentShow=true isArrow=true isContent="设置">
            </list>
        </div>
        <div class="block">
            <list iconName="me-ion-o-gear" listName="登录密码" iconColor='#fdd207' isContentShow=true isArrow=true isBtm=true isContent="修改">
            </list>
            <list iconName="me-ion-medkit" listName="风险评测" iconColor='#7370e6' isContentShow=true isArrow=true v-bind:isContent="userInfo.rate">
            </list>
        </div>
    </div>
</template>
<style>
    .block {
        border-bottom: 8px solid #f6f6f6;
    }
</style>
<script>
    import list from '../components/list';
    import { getData } from '../lib/config.js';
    import { cookie } from '../lib/utils';
    export default {
        data(){
            return {
                userInfo:{}
            }
        },
        mounted() {
            var _this = this;
            getData({
                key: 'jdsafeauth',
                method: 'post',
                data: {
                    tokenid: cookie.getItem("tokenid")
                },
                callback: function (res) {
                    _this.userInfo = res;
                }
            })
        },
        components: {
            list
        }
    }

</script>