<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/9
Time: 13:02-->
<template>
  <tr v-show="show">
    <td v-for="(column,tdIndex) in columns">
      <button v-if="tdIndex==0" @click="toggle">+</button>
      {{record[column.dataIndex]}}
    <td>
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
