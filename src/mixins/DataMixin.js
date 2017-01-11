/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/11
 * Time: 10:47
 */
'use strict';
import Vue from "vue";
import _ from "lodash";
export default {
    methods:{
        columnsFormat:function (columns,parent) {
            let me = this;
            let tmp = [];
            _.forEach(columns,function (column) {
                if(parent){
                    Vue.set(column,'_parent',parent);
                }
                tmp.push(column);
                if(column.items && column.items.length>0 ){
                    let children = me.columnsFormat(column.items,column);
                    tmp = _.concat(tmp,children);
                }
            });
            return tmp;
        }
    }
}