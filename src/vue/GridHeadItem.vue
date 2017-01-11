<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/10
Time: 15:25-->
<template>
  <div class="ms-grid-head-item" :style="customStyle">
    <div v-if="!columnsGroup" class="ms-grid-head-item-inner">{{column.text}}</div>
    <div v-if="columnsGroup" class="ms-grid-head-group" :style="customStyle">
      <div class="ms-grid-head-item" :style="width">
        <div class="ms-grid-head-item-inner">{{column.text}}</div>
      </div>
      <div>
        <grid-head-item v-for="(cc,index) in column.columns"
                        key="index"
                        :column="cc"
                        :flex-count="flexCount"
                        :rest-width="restWidth"  />
      </div>
    </div>
  </div>
</template>
<script>
    import BaseMixin from "../mixins/BaseMixin";
    import DataMixin from "../mixins/DataMixin";
    export default {
      name:'grid-head-item',
      mixins:[BaseMixin,DataMixin],
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
      data(){
        return {
          groupWidth:0
        };
      },
      computed:{
        columnsGroup:function() {
          let me = this;
          if(me.column.columns && me.column.columns.length>0){
            return true;
          }
          return false;
        },
        customStyle:function(){
          let me = this;
          let style = {};
          let width = 0;
          if(!me.columnsGroup){
            width = me.columnWidth(me.column,me.flexCount,me.restWidth);
          }else {
            width = me.columnsGroupWidth(me.column,me.flexCount,me.restWidth);
          }
          me.groupWidth = width;
          Object.assign(style,{width: width +'px'});
          return style;
        },
        width:function(){
          let me = this;
          let style = {};
          Object.assign(style,{width: me.groupWidth +'px'});
          return style;
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
