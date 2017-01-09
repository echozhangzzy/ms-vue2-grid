<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/9
Time: 13:02-->
<template>
  <tr v-show="show">
    <td v-for="(column,tdIndex) in columns" key="tdIndex" :width="column.width">
      <span v-if="tdIndex==0" v-for="space in spaces" class="ms-space"></span>
      <button v-if="tdIndex==0 && record.children && record.children.length>0" @click="toggle">+</button>
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
        toggle: function() {
          let me = this;
          console.log(me.columns);
          me.$emit('toggle',me.index);
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
