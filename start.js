/**
 * Created by Bane.Shi.
 * Copyright KaShuo
 * User: Bane.Shi
 * Date: 2016/11/25
 * Time: 15:22
 */
'use strict';
var path = require("path");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.babel.js');
(new WebpackDevServer(webpack(config),{
    contentBase: path.resolve(__dirname,'dist'),
    hot:true,
    // inline: true,
    noInfo: false,
    historyApiFallback: true,
    proxy:{
        "/auth/*": {
            target:"http://auth.dev.kashuo.net/",
            changeOrigin: true,
            secure: false,
            //pathRewrite: {'^/api' : ''}
        }
    }
})).listen(3000,'localhost',function (res) {
    console.log("Start server port 3000");
},function (res) {
});