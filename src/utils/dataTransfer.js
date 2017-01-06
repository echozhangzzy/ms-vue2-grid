/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/6
 * Time: 11:13
 */
'use strict';
import _ from "lodash";
function DataTransfer(data) {
    if(!this instanceof DataTransfer){
        return new DataTransfer(data);
    }
}

DataTransfer.treeToArray = function(data) {
    let tmp = [];
    _.forEach(data,function(record) {
        tmp.push(record);
        if(record.children && record.children.length>0 ){
            let children = DataTransfer.treeToArray(record.children);
            tmp = _.concat(tmp,children);
        }
    });
    return tmp;
}

module.exports = DataTransfer;