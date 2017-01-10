<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/9
Time: 13:02-->
<template>
  <tr v-show="show">
    <td v-for="(column,tdIndex) in columns" key="tdIndex" :width="column.width">
      <span v-if="spaceIconShow(tdIndex)" v-for="space in record._level" class="ms-space"></span>
      <button v-if="toggleIconShow(tdIndex,record)" @click="toggle">
        <span v-if="!record._expanded">+</span>
        <span v-if="record._expanded">-</span>
      </button>
      {{record[column.dataIndex]}}
    </td>
  </tr>
</template>
<script>
    export default {
      props:{
        index:{
          type:Number
        },
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
        record:{
          type:Object,
          default:function() {
            return {};
          }
        }
      },
      computed:{
        show:function(){
          let me = this;
          let record = me.record;
          let show = (record._parent?(record._parent._expanded && record._parent._show):true);
          me.$emit('row-show',me.index,show);
          return show;
        },
        spaces:function(){
          let me = this;
          let record = me.record;
          let spaces = [];
          for(var i=0;i<record._level;i++){
            spaces.push(i);
          }
          return spaces;
        }
      },
      methods:{
        spaceIconShow:function(index){
          let me = this;
          if(me.treeStructure && index==0){
            return true;
          }
          return false;
        },
        toggleIconShow:function(index,record) {
          let me = this;
          if(me.treeStructure && index==0 && record.children && record.children.length>0){
            return true;
          }
          return false;
        },
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
