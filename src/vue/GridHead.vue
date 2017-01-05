<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/5
Time: 16:23-->
<template>
<div style="width:100%;">
  <table style="width:100%;">
    <thead>
      <tr>
        <th v-for="column in columns">{{column.title}}</th>
      </tr>
    </thead>
  </table>
</div>
</template>
<script>
    export default {
      props:{
        columns:{
          type:Array,
          default:function(){
            return [];
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
