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
    {{record[column.dataIndex]}}
  </td>
</template>
<script>
    import BaseMixin from "../mixins/BaseMixin";
    export default {
      mixins:[BaseMixin],
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
          let width = me.cellWidth(me.column,me.flexCount,me.restWidth);
          Object.assign(style,{width: width +'px'});
          return style;
        }
      },
      methods:{
        toggle: function() {
          let me = this;
          me.$emit('toggle',me.index);
        }
      },
      components: {
      }
    }

</script>
<style>

</style>
