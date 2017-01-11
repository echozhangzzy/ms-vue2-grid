<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/5
Time: 16:42-->
<template>
  <div style="width:100%;">
    <table style="width:100%;" class="table table-bordered">
      <tbody>
        <tr v-for="(record,trIndex) in dataSource"
            is="grid-tr"
            :tree-structure="treeStructure"
            :columns="columns"
            :record="record"
            :record-index="trIndex"
            :flex-count="flexCount"
            :rest-width="restWidth"
            v-on:toggle="toggle"
            v-on:row-show="rowShow">
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Vue from "vue";
  import Utils from '../utils/index.js';
  import BaseMixin from "../mixins/BaseMixin";
  import GridTr from "./GridTr.vue";
    export default {
      mixins:[BaseMixin],
      props:{

      },
      computed:{

      },
      methods:{
        toggle:function(trIndex){
          let me = this;
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
