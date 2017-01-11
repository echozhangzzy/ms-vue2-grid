<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/10
Time: 15:25-->
<template>
  <div class="ms-grid-head-item" :style="customStyle">
    <div class="ms-grid-head-item-inner">{{column.text}}</div>
  </div>
</template>
<script>
    export default {
      props:{
        column:{
          type:Object
        },
        flexCount:{
          type:Number
        },
        restWidth:{
          type:Number
        }
      },
      computed:{
        customStyle:function(){
          let me = this;
          let style = {};
          let minWidth = 80;
          let width = minWidth;
          if(me.column.width){
            minWidth = (me.column.width>minWidth)?me.column.width:minWidth;
          }else {
            width = (me.column.flex/me.flexCount)*me.restWidth;
            width = (width>minWidth)?width:minWidth;
          }
          Object.assign(style,{width: width +'px'});
          return style;
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
