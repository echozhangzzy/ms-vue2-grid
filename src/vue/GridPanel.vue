<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/5
Time: 15:57-->
<template>
<div>
  <grid-head :columns="columns" />
  <grid-body :columns="columns" :data-source="data" />
</div>
</template>
<script>
    import Utils from '../utils/index.js';
    import GridHead from "./GridHead.vue";
    import GridBody from "./GridBody.vue";
    export default {
      name:"grid-panel",
      props:{
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
      computed:{
        data:function() {
          let me = this;
          return Utils.MSDataTransfer.treeToArray(me.dataSource);
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
