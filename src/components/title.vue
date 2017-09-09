<template>
    <div id="listTitle">
        <span>
            {{titleName}}
        </span>
    </div>
</template>

<script>
    export default{
        props:{
            titleName : String
        }
    }
</script>

<style scoped>
    div{
        background:#f6f6f6;
        text-align: left;
        padding:10px 3%;
    }
    div span{
        display: block;
        height:15px;
        border-left:4px solid #8e8e8e;
        line-height:15px;
        padding-left:1%;
        font-size:12px;
        color:#8e8e8e
    }
</style>