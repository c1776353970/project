<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发布时间:{{newsinfo.add_time|dateFormat}}</span>
            <span>浏览{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>

<!--        评论区域-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    //导入评论子组件
    import comment from "../subcomponent/comment.vue";
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                id:this.$route.params.id,//将url地址上的Id，挂载到data中
                newsinfo:{}
            }
        },
        created(){
            this.getnewsinfo()
        },
        methods:{
            getnewsinfo(){//获取新闻详情
                this.$http.get('api/getnew/'+this.id).then(result=>{
                    if(result.body.status===0){
                        this.newsinfo=result.body.message[0]
                    }
                    else{
                        Toast('加载新闻详情失败！')
                    }
                })
            }
        },
        components:{
            "comment-box":comment
        }
    }
</script>

<style scoped>
.newsinfo-container{
    padding: 0 5px;
}
    .newsinfo-container .title{
        font-size: 16px;
        color: red;
        margin:15px 0;
        text-align: center;
    }
    .newsinfo-container .subtitle{
        font-size: 14px;
        color: #007aff;
        display: flex;
        justify-content: space-between;
    }
</style>