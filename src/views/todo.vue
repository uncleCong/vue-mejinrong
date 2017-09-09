<template>
    <div id="todo">
        <input type="text" v-model="inputValue">
        <input type="button" value="添加" @click="setData">
        <input type="button" value="清除" @click="clearData">
        <ul>
            <li v-for="key in list" v-bind:class="{ done: key.statue }">
                <input type="button" value="完成" @click="updateData(key.index,$event)">
                <input type="button" value="删除" @click="deleteData(key.index)">
                <span>{{key.item}}</span>
            </li>
        </ul>
    </div>
</template>

<style>
    input[type=text]{
        margin-top:10px;
        border:1px solid #ccc;
        outline: none 
    }
    input[type=button],button{
        background:#ff4c4c;
        color:#fff;
        border: none;
        outline: none;
        border-radius:3px;
        font-size:12px;
    }
    ul{
        margin-top:20px;
    }
    ul li {
        text-align: left;
        height:25px;
        line-height: 25px;
        margin-top:10px;
        color:#ff4c4c
    }
    ul li.done {
        color:#eeeeee;
    }
</style>

<script>
    export default {
        data (){
            return {
                index:0,
                inputValue:'',
                list : []
            }
        },
        methods : {
            setData (e){
                this.list.push({
                    item : this.inputValue,
                    index: this.index,
                    statue:false
                })
                this. index ++ ;
                this. inputValue = "";
            },
            updateData (index,event){
                for(var i=0;i<this.list.length;i++){
                    if(this.list[i].index == index){
                        this.list[i].statue = !this.list[i].statue;
                    }
                }
                event.target.value = event.target.value=="完成" ? "继续" : "完成";
            },
            deleteData (index){
                for(var i=0;i<this.list.length;i++){
                    if(this.list[i].index == index){
                        this.list.splice(i,1)
                    }
                }
            },
            clearData (){
                this.list = []
            }
        }
    }
</script>