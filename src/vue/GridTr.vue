<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/9
Time: 13:02-->
<template>
  <tr v-show="show">
    <td v-for="(column,index) in columns"
        is="grid-td" :column-index="index" :column="column" :record="record" :flex-count="flexCount"
        :rest-width="restWidth" >
    </td>
  </tr>
</template>
<script>
    import BaseMixin from "../mixins/BaseMixin";
    import GridTd from "./GridTd.vue";
    export default {
      mixins:[BaseMixin],
      props:{

      },
      computed:{
        show:function(){
          let me = this;
          let record = me.record;
          let show = (record._parent?(record._parent._expanded && record._parent._show):true);
          me.$emit('row-show',me.recordIndex,show);
          return show;
        }
      },
      methods:{

      },
      components: {
        GridTd
      }
    }
</script>
<style>

</style>
