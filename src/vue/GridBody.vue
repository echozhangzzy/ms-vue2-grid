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
        <tr v-for="(record,trIndex) in dataSource"
                is="grid-tr"
                :columns="columns"
                :record="record" :index="trIndex" v-on:toggle="toggle" v-on:row-show="rowShow">

        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Vue from "vue";
  import Utils from '../utils/index.js';
  import GridTr from "./GridTr.vue";
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

      },
      methods:{
        toggle:function(trIndex){
          let me = this;
          alert(trIndex);
          let record = me.dataSource[trIndex];
          record._expanded = !record._expanded;
        },
        rowShow:function(trIndex,show){
          let me = this;
          Vue.set(me.dataSource[trIndex],'_show',show);
        }
      },
      components: {
        GridTr
      }
    }
</script>
<style>

</style>
