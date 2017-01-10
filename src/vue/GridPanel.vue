<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/5
Time: 15:57-->
<template>
<div>
  <grid-head :columns="columns"
             :rest-width="restWidth"
             :flex-count="flexCount" />
  <grid-body :columns="columns"
             :tree-structure="treeStructure"
             :data-source="data"
             :rest-width="restWidth"
             :flex-count="flexCount" />
</div>
</template>
<script>
    import Utils from '../utils/index.js';
    import GridHead from "./GridHead.vue";
    import GridBody from "./GridBody.vue";
    export default {
      name:"grid-panel",
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
        }
      },
      data(){
        return {
          gridPanelWidth:0
        }
      },
      computed:{
        data:function() {
          let me = this;
          if(me.treeStructure){
            return Utils.MSDataTransfer.treeToArray(me.dataSource);
          }
          return me.dataSource;
        },
        restWidth:function(){
          let me = this;
          let widthCount = 0;
          _.forEach(me.columns,function(column){
               if(column.width){
                widthCount += column.width;
               }
          });
          let restWidth = me.gridPanelWidth-widthCount;
          console.log(restWidth);
          return restWidth;
        },
        flexCount:function(){
          let me = this;
          let flexCount = 0;
          _.forEach(me.columns,function(column){
            if(!column.width){
               if(column.flex){
                flexCount += column.flex;
               }else {
                flexCount += 1;
               }
            }
          });
          console.log(flexCount);
          return flexCount;
        }
      },
      mounted(){
        let me = this;
        me.getWidth();
      },
      methods:{
        getWidth:function(){
          let me = this;
          me.gridPanelWidth = me.$el.clientWidth;
        }
      },
      components: {
        GridHead,
        GridBody
      }
    }
</script>
<style>

</style>
