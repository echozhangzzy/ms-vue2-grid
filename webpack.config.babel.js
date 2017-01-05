/**
 * Created by Bane.Shi.
 * Copyright KaShuo
 * User: Bane.Shi
 * Date: 2016/11/25
 * Time: 15:18
 */
"use strict";
import path from 'path';
import webpack from 'webpack';
import colors from 'colors';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TransferWebpackPlugin from 'transfer-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import args from "node-args";
const development = 'DEVELOPMENT';
const production = 'PRODUCTION';
const ENV = args.env || development;
let config = {
    resolve:{
        alias:{
            'vue': 'vue/dist/vue.js'
        },
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js','vue'],
    },
    entry:{
        vendor: ['jquery', 'lodash'],
        main  : './example/app/main.js',
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        publicPath: ''
    },
    module:{
        loaders:[
            {test: /\.vue$/ ,loader : 'vue'},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader' ,
                query:{
                    presets:['es2015','stage-3'],
                    plugins:['transform-runtime']
                },
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css!sass?sourceMap") },
            {test: /\.(png|jpg|gif)$/,loader: "url?limit=2500" },
            {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
            //  {test: require.resolve('jquery'), loader: 'expose?window.jquery'},
           // {test: require.resolve('jquery'), loader: 'expose?$'},
        ]
    },
    vue:{
        loaders:{
           // html: 'vue-html-loader?removeOptionalTags=false&removeRedundantAttributes=false', //https://www.npmjs.com/package/html-minifier
            css: ExtractTextPlugin.extract('css'),
            'scss': ExtractTextPlugin.extract("css!sass"),
        }
    },
    plugins:[
        new Clean(['web']),
        new TransferWebpackPlugin([
           // {from: 'images', to: 'images'}
        ], path.join(__dirname, 'example')),
        new webpack.ProvidePlugin({
            _ : 'lodash',
            $ : 'jquery',
            jQuery : 'jquery',
        }),
        new ExtractTextPlugin('[name].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new HtmlWebpackPlugin({
            title:'权限系统',
            template: './example/index.ejs',
            hash: true,
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true
            }
        }),
    ],
    devtool: (ENV == production)?'': '#source-map'
}
let collection = ((pluginItems)=>{
    let {plugins} = config;
    plugins = [...plugins,...pluginItems];
    Object.assign(config,{plugins});
});
const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings:false
        }
    })
];
switch (ENV){
    case development:
        break;
    case production:
        collection(productionPlugins);
        break;
    default:
        break;
}
module.exports = config;