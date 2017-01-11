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
                if(column.columns && column.columns.length>0 ){
                    let children = me.columnsFormat(column.columns,column);
                    tmp = _.concat(tmp,children);
                }else{
                    tmp.push(column);
                }
            });
            return tmp;
        },
        subColumnsWidthCount:function (columns) {
            let me = this;
            let width = 0;
            _.forEach(columns,function (column) {
                if(column.columns && column.columns.length>0 ){
                    let childrenWidth = me.subColumnsWidthCount(column.columns);
                    width += childrenWidth;
                }else {
                   if(column.width){
                       width += column.width;
                   }
                }
            });
            return width;
        },
        subColumnsFlexCount:function (columns) {
            let me = this;
            let flexCount = 0;
            _.forEach(columns,function (column) {
                if(column.columns && column.columns.length>0 ){
                    let childrenFlex = me.subColumnsFlexCount(column.columns);
                    flexCount += flexCount;
                }else {
                    if(!column.width){
                        if(column.flex){
                            flexCount += column.flex;
                        }else {
                            flexCount += 1;
                        }
                    }
                }
            });
            return flexCount;
        },
        columnWidth:function(column,flexCount,restWidth){
            let me = this;
            let minWidth = 80;
            let width = minWidth;
            if(me.column.width){
                width = (me.column.width>minWidth)?me.column.width:minWidth;
            }else {
                let flex = me.column.flex;
                if(!flex){
                    flex = 1;
                }
                width = (flex/me.flexCount)*me.restWidth;
                width = (width>minWidth)?width:minWidth;
            }
            return width;
        },
        columnsGroupWidth:function (column,flexCount,restWidth) {
            let me = this;
            let width = 0;
            width += me.subColumnsWidthCount(column.columns);
            let subFlexCount  = me.subColumnsFlexCount(column.columns);
            width += (subFlexCount/flexCount)*restWidth;
            return width;
        }
    }
}