//1.导入vue-router包
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopCarContainer from "./components/tabbar/ShopCar.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import Photoinfo from "./components/photos/Photoinfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";

//3.创建路由对象

var router = new VueRouter({
    routes:[//匹配路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopCarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:Photoinfo},
        {path:'/home/goodslist',component:GoodsList}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由的类
})

//向外暴露一下
export default router