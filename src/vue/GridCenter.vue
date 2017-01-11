<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/11
Time: 10:58-->
<template>
  <div>
    <grid-head :columns="columns"
               :rest-width="restWidth"
               :flex-count="flexCount" />
    <grid-body :columns="columns"
               :tree-structure="treeStructure"
               :data-source="dataSource"
               :rest-width="restWidth"
               :flex-count="flexCount" />
  </div>
</template>
<script>
    import BaseMixin from "../mixins/BaseMixin";
    import GridHead from "./GridHead.vue";
    import GridBody from "./GridBody.vue";
    export default {
      mixins:[BaseMixin],
      components: {
        GridHead,
        GridBody
      }
    }
</script>
<style>

</style>
