//入口文件
import Vue from 'vue'

//1.1导入路由
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//1.3导入自己的router.js 路由模块
import router from './router.js'

/*//2.1导入axios
import axios from'axios'
//2.2安装axios
Vue.prototype.axios = axios*/

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root='http://www.liulongbin.top:3005'

//导入时间插件
import moment from 'moment'
//定义一个全局的过滤器，来格式化时间
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

//导入APP组件
import app from './App.vue'

//导入Mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-ui中的组件
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem ,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router//1.4挂在路由对象到实例上
})