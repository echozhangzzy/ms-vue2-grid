<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/11
Time: 09:44-->
<template>
  <td :style="customStyle">
    <span v-if="spaceIconShow" v-for="space in record._level" class="ms-space"></span>
    <button v-if="toggleIconShow" @click="toggle">
      <span v-if="!record._expanded">+</span>
      <span v-if="record._expanded">-</span>
    </button>
    <div v-html="render()"></div>
  </td>
</template>
<script>
    import BaseMixin from "../mixins/BaseMixin";
    import DataMixin from "../mixins/DataMixin";
    export default {
      mixins:[BaseMixin,DataMixin],
      computed:{
        spaces:function(){
          let me = this;
          let record = me.record;
          let spaces = [];
          for(var i=0;i<record._level;i++){
            spaces.push(i);
          }
          return spaces;
        },
        spaceIconShow:function(){
          let me = this;
          if(me.treeStructure && me.columnIndex==0){
            return true;
          }
          return false;
        },
        toggleIconShow:function() {
          let me = this;
          if(me.treeStructure
          && me.columnIndex==0
          && me.record.children
          && me.record.children.length>0){
            return true;
          }
          return false;
        },
        customStyle:function() {
          let me = this;
          let style = {};
          let width = me.columnWidth(me.column,me.flexCount,me.restWidth);
          Object.assign(style,{width: width +'px'});
          return style;
        }
      },
      methods:{
        toggle: function() {
          let me = this;
          me.$emit('toggle',me.index);
        },
        render:function() {
          let me = this;
          if(me.column.render){
            return me.column.render();
          }
          return me.record[me.column.dataIndex];
        }
      },
      components: {
      }
    }

</script>
<style>

</style>
