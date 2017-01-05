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
        <tr v-for="record in dataSource">
          <td v-for="column in columns">{{record[column.dataIndex]}}</td>
        </tr>
      </tbody>
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
        },
        dataSource:{
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
