/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/6
 * Time: 11:13
 */
'use strict';
import Vue from "vue";
import _ from "lodash";
function DataTransfer(data) {
    if(!this instanceof DataTransfer){
        return new DataTransfer(data,null,null);
    }
}

DataTransfer.treeToArray = function(data,parent,level) {
    let tmp = [];
    _.forEach(data,function(record) {
        if(record._expanded == undefined){
            Vue.set(record,'_expanded',false);
        }
        if(parent){
            Vue.set(record,'_parent',parent);
        }
        let _level = 0;
        if(level!=undefined && level!=null){
            _level = level+1;
        }
        Vue.set(record,'_level',_level);
        tmp.push(record);
        if(record.children && record.children.length>0 ){
            let children = DataTransfer.treeToArray(record.children,record,_level);
            tmp = _.concat(tmp,children);
        }
    });
    return tmp;
}

module.exports = DataTransfer;