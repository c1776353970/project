<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList">
                <router-link :to="'/home/newsinfo/'+item.id" class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                       <h1> {{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发布时间:{{item.add_time| dateFormat}}</span>
                            <span>浏览次数：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>


        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){//获取新闻列表
                axios.get('api/getnewslist').then(result=>{
                    if(result.data.status===0){
                        this.newsList=result.data.message
                    }
                    else{
                        Toast('获取新闻数据失败了')
                    }
                })
            }
        }
    }
</script>

<style scoped>
.mui-table-view h1{
    font-size: 13px;
}
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>