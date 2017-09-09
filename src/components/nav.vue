<template>
    <div layout="row bottom-spread">
        <router-link to="/">
            <p><b class="me-ion-a-laptop"></b></p>
            <p>首页</p>
        </router-link>
        <router-link to="/list">
             <p><b class="me-ion-a-menu"></b></p>
            <p>列表</p>
        </router-link>
        <router-link to="/account">
             <p><b class="me-ion-a-contact"></b></p>
            <p>我的</p>
        </router-link>
        <router-link to="/more">
             <p><b class="me-ion-a-settings"></b></p>
            <p>更多</p>
        </router-link>
    </div>
</template>

<script>

    export default {
        
    }

</script>


<style scoped>
    .router-link-exact-active {
       color:#ff4c4c; 
    }
    div{
        position: fixed;
        bottom: 0;
        padding:5px 0;
        background:#eee;
    }
    a{
        font-size:12px;
        color:#999;
        text-decoration: none
    }
    b{
        font-size:24px;
    }
</style>