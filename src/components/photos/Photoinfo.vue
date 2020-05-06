<template>
    <div class="photoinfo-container">
       <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击{{photoinfo.click}}次</span>
        </p>

        <hr>

<!--        缩略图区域-->

            <div class="thumbs">
                <vue-preview :slides="thumbs"></vue-preview>
            </div>

<!--        图片内容区域-->
        <div class="content" v-html="photoinfo.content"></div>

<!--        评论子组件-->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    //导入axios
    import axios from 'axios'
    //导入评论子组件
    import comment from "../subcomponent/comment.vue";

    export default {
        data(){
            return {
                id:this.$route.params.id,//当前图片的id
                photoinfo:{},//图片详情
                thumbs:[]//存放缩略图的数组
            }
        },
        created(){
            this.getPhotoInfo()
            this.getThumbs()
        },
        methods:{
            getPhotoInfo(){
                axios.get('api/getimageInfo/'+this.id).then(result=>{
                    if(result.data.status===0){
                        this.photoinfo=result.data.message[0]
                    }
                })
            },
            getThumbs(){
                axios.get('api/getthumimages/'+this.id).then(result=>{
                    if(result.data.status===0){
                        result.data.message.forEach(element=>{
                            element.w=600//设置以大图浏览时的宽度
                            element.h=400//设置以大图浏览时的高度
                            element.msrc=element.src//小图
                        })
                        this.thumbs=result.data.message
                    }
                })
            }
        },
        components:{
            'cmt-box':comment
        }
    }
</script>

<style lang="scss" scoped>
    .photoinfo-container {
        padding: 3px;

        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }
        .thumbs {
            /deep/ .my-gallery {
                display: flex;
                flex-wrap: wrap;
                figure {
                    width: 30%;
                    margin: 5px;
                    img {
                        width: 100%;
                    }
                }
            }
        }

    }
</style>