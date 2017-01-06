<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/5
Time: 16:42-->
<template>
  <div style="width:100%;">
    <table style="width:100%;">
      <tbody>
        <tr v-for="record in data">
          <td v-for="column in columns">{{record[column.dataIndex]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Utils from '../utils/index.js';
    export default {
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
      }
    }
</script>
<style>

</style>
