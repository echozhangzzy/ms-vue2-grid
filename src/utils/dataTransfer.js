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
        return new DataTransfer(data,null);
    }
}

DataTransfer.treeToArray = function(data,parent) {
    let tmp = [];
    _.forEach(data,function(record) {
        if(record.expanded == undefined){
           // record = Object.assign({},record,{"expanded":false});
            Vue.set(record,'_expanded',false);
        }
        if(parent){
            Vue.set(record,'_parent',parent);
        }
        tmp.push(record);
        if(record.children && record.children.length>0 ){
            let children = DataTransfer.treeToArray(record.children,record);
            tmp = _.concat(tmp,children);
        }
    });
    return tmp;
}

module.exports = DataTransfer;