/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/11
 * Time: 09:37
 */
'use strict';
export default {
    props:{
        treeStructure:{
            type:Boolean,
            default:function() {
                return false;
            }
        },
        columns:{
            type:Array,
            default:function(){
                return [];
            }
        },
        dataSource:{
            type:Array,
            default:function(){
                return [];
            }
        },
        columnsList:{
            type:Array,
            default:function(){
                return [];
            }
        },
        column:{
            type:Object,
            default:function(){
                return {};
            }
        },
        columnIndex:{
            type:Number
        },
        record:{
            type:Object,
            default:function() {
                return {};
            }
        },
        recordIndex:{
            type:Number,
            default:function(){
                return 0;
            }
        },
        flexCount:{
            type:Number
        },
        restWidth:{
            type:Number
        }
    },
    methods:{
        cellWidth:function(column,flexCount,restWidth){
            let me = this;
            let minWidth = 80;
            let width = minWidth;
            if(me.column.width){
                width = (me.column.width>minWidth)?me.column.width:minWidth;
            }else {
                width = (me.column.flex/me.flexCount)*me.restWidth;
                width = (width>minWidth)?width:minWidth;
            }
            return width;
        }
    }
}