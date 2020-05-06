<template>
    <div>
<!--        顶部滑动部分-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'' ]" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>

                </div>
            </div>

        </div>

        <!--    图片展示列表-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>


</template>

<script>
    import axios from 'axios'

    // import mui from '../../lib/mui/js/mui.min.js'

 /*   mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });*/

    export default {
        data(){
            return {
                cates:[],//所有分类的列表
                list:[]//图片列表数据的数组
            }
        },
        created(){
            this.getAllCategory()
            this.getPhotoListByCateId(0)
        },
        methods:{
            getAllCategory(){
                //获取全部分类
                axios.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
                    if(result.data.status===0){
                         // console.log(result);
                        //手动拼接出一个最完整的分类列表
                        result.data.message.unshift({title:'全部',id:0})
                        this.cates=result.data.message
                    }
                })
            },
            getPhotoListByCateId(cateId){
                //根据 分类id获取图片列表
                axios.get('http://www.liulongbin.top:3005/api/getimages/'+cateId).then(result=>{
                    if(result.data.status===0){
                        // console.log(result);
                        this.list=result.data.message;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .photo-list{
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }
    .photo-list li{
        background-color: #ccc;
        text-align: center;
        list-style: none;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    }
    img{
        width: 100%;
        vertical-align: middle;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .info{
        color: white;
        position: absolute;
        bottom: 0;
        text-align: left;
        background-color: rgba(0,0,0,0.5);
        max-height: 84px;
    }
    .info .info-title{
        font-size: 14px;
    }
    .info .info-body{
        font-size: 12px;
    }
</style>