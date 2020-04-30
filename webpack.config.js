var path=require('path')

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时，把打包好的bundle.js注入页面底部
var htmlWebpackPlugin=require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

//当以命令的形式运行 webpack 或者 webpack-dev-server的时候，工具会发现，我们并没有提供
//要打包的文件的 入口和出口，此时，他会检查项目根目录中的配置文件，并读取这个文件
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    output: {
        //指定输出选项
        path:path.join(__dirname,'./dist'),//输出路径
        filename: 'bundle.js'//指定输出文件的名称
    },
    mode: "development",
    plugins:[
        //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename: "index.html" //生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{//这个节点，用于配置所有 第三方模块 加载器
        rules:[//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/.\scss$/,use:['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
                    }
                },
                exclude:/node_modules/
            },
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loader:"url-loader"},
            {test:/\.vue$/,use:'vue-loader'},//处理.vue文件的loader

        ]
    },
    resolve:{
        alias: {
            //修改vue被导入报的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}