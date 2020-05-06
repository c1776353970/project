<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120个字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
                </div>
                <div class="cmt-body">{{item.content===""?"此用户很懒，啥也没说":item.content}}</div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast }  from 'mint-ui'
    export default {
        data(){
            return {
                pageIndex:1,//默认展示第一页数据
                msg:"",//评论内容
                comments:[]//保存获取的评论

            }
        },
        created(){
            this.getComments()
        }
        ,
        methods:{
            getComments(){
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
                    if(result.body.status===0){
                        // this.comments=result.body.message;
                        //每当获取新数据的时候，不要把老数据清空，老数据拼接上新数据
                        this.comments=this.comments.concat(result.body.message)
                    }
                    else{
                        Toast('获取评论失败！')
                    }
                })
            },
            getMore(){
                this.pageIndex++
                this.getComments()
            },
            postComments(){
                //校验评论的内容不能为空
                if(this.msg.trim().length===0){
                    return Toast('评论内容不能为空!')
                }
                this.$http.post('api/postcomment/'+this.id,{
                    content:this.msg.trim()
                }).then(function(result){
                    if(result.body.status===0){
                        //拼接一个评论对象：
                        var cmt={user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()}
                        this.comments.unshift(cmt)
                        this.msg=""
                    }
                })
            }
        },
        props:["id"]
    }
</script>

<style scoped>
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list{
    margin: 10px 0;
}
.cmt-list .cmt-item{
    font-size: 13px;
}
 .cmt-item  .cmt-title{
     background-color: #ccc;
     line-height: 30px;
 }
.cmt-item  .cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
</style>