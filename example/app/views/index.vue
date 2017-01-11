<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2016/12/6
Time: 15:07-->
<template>
  <div style="width:1000px;">
    <my-button/>
    <grid-panel :columns="columns" :tree-structure=false :data-source="dataSource"/>
  </div>
</template>
<script>
    import {GridPanel} from "../../../src/index";
    import MyButton from "./MyButton.vue";
    export default {
      data(){
        return {
          columns:[
            {
               text:'测试',
               dataIndex:'name',
               flex:1
            },
            {
               text:'测试2',
               columns:[
                {
                  text:'测试2.1',
                  dataIndex:'age'
                },
                {
                  text:'测试2.2',
                  dataIndex:'name',
                  width:100
                }
               ]
            },
            {
               text:'测试3',
               dataIndex:'age',
               width:100,
               render:function(){
                return '<my-button />';
               }
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
                  age:34,
                  children:[
                    {
                      name:'E',
                      age: 50
                    }
                  ]
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
        GridPanel,
        MyButton
      }
    }
</script>
<style>

</style>
