<template>
    <div>
<!--        轮播图区域-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>

        </mt-swipe>
<!--        九宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="/static/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="/static/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="/static/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="/static/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Toast } from "mint-ui"

    export default {
       data(){
           return {
               lunbotuList:[]//保存轮播图的数组
           };
       },
        created() {
            this.getLunbotu();
        },
        methods:{
           getLunbotu(){
               //获取轮播图数据
               axios.get('api/getlunbo').then(result=>{
                   // console.log(result.body);
                   if(result.data.status===0){
                       this.lunbotuList=result.data.message;
                   }
                   else{
                       Toast('获取失败！')
                   }
               })
           }
        }
    }
</script>

<style scoped>
  .mint-swipe{
    height: 200px;
}
  .mint-swipe-item:nth-child(1){
      background-color: red;
  }
  .mint-swipe-item:nth-child(2){
      background-color: green;
  }
  .mint-swipe-item:nth-child(3){
      background-color: cyan;
  }
  .mint-swipe-item img{
      height: 100%;
      width: 100%;
  }
  .mui-grid-view.mui-grid-9{
      background-color: white;
      border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border: 0;
  }
  .mui-media-body{
      font-size: 13px;
  }
  .mui-grid-view img{
      width: 60px;
      height: 60px;
  }
</style>