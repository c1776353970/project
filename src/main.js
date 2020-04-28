//入口文件
import Vue from 'vue'

//导入APP组件
import app from './App.vue'

//导入Mui
import './lib/mui/css/mui.min.css'

//按需导入Mint-ui中的组件
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

var vm=new Vue({
    el:"#app",
    render:c=>c(app)
})