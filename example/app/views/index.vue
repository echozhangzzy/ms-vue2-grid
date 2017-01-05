<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2016/12/6
Time: 15:07-->
<template>
  <div >
    <grid-panel :columns="columns" :data-source="dataSource"/>
  </div>
</template>
<script>
    import {GridPanel} from "../../../src/index";
    export default {
      data(){
        return {
          columns:[
          {
             title:'测试',
             dataIndex:'name'
          },
          {
             title:'测试2',
             dataIndex:'age'
          },
          {
             title:'测试3',
             dataIndex:'age'
          }
          ],
          dataSource:[
            {
              name:'A',
              age:23
            },
            {
              name:'B',
              age:24,
              children:[
                {
                  name:'D',
                  age:34
                }
              ]
            },
            {
              name:'C',
              age:24
            }
          ]
        }
      },
      components: {
        GridPanel
      }
    }
</script>
<style>

</style>
