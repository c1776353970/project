<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="//img12.360buyimg.com/n1/s450x450_jfs/t1/45954/33/10562/97168/5d780893Eaec0fe47/ee567a1dea515d38.jpg" alt="">
            <h1 class="title">
                Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="new">¥5499</span>
                    <span class="old">¥5999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余6999件</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="//img12.360buyimg.com/n1/s450x450_jfs/t1/45954/33/10562/97168/5d780893Eaec0fe47/ee567a1dea515d38.jpg" alt="">
            <h1 class="title">
                Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="new">5499</span>
                    <span class="old">5999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余6999件</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="//img12.360buyimg.com/n1/s450x450_jfs/t1/45954/33/10562/97168/5d780893Eaec0fe47/ee567a1dea515d38.jpg" alt="">
            <h1 class="title">
                Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="new">5499</span>
                    <span class="old">5999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余6999件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;

            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .new{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
            }
        }
    }

}
</style>