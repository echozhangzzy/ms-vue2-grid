<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/10
Time: 15:25-->
<template>
  <div class="ms-grid-head-item" :style="customStyle">
    <div>{{column.text}}</div>
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
          if(me.column.width){
            Object.assign(style,{width:me.column.width+'px'});
          }else {
            let width = (me.column)*me.restWidth;
            Object.assign(style,{width: +'px'});
          }
          return style;
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
