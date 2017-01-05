/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2016/12/6
 * Time: 14:48
 */
'use strict';
import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./app.vue";

import routers from "./routes/route";
console.log(routers);
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/',component: require("./views/index.vue")},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h=>h(App)
}).$mount('#app')
