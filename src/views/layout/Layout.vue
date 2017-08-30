<template>
  <div class="layout-warapper">
    <el-row class="header">
      <span class="E_title">ERP</span>
      <span class="v_tip">v10</span>
    </el-row>
    <SideBar class="sideBar-warpper"></SideBar>
    <div class="appMain-warpper">
      <appMain></appMain>
    </div>
  </div>
</template>

<script lang="">
  import SideBar from "./SideBar"
  import appMain from "./appMain"

  export default {
    name: '',
    data() {
      return {
        msg: "1323"
      }
    },
    components: {
      SideBar,
      appMain
    },
    methods: {},
    mounted() {

    },
    created() {

    },
  }
</script>

<style lang="scss" scoped>
  .layout-warapper{
    position: relative;
  }
  .header {
    background-color: #CA0011;
    padding-left: 20px;
    height: 44px;
    .E_title {
      font-family: 'Arial-BoldMT', 'Arial Bold', 'Arial';
      font-weight: 700;
      font-style: normal;
      font-size: 21px;
      color: #fff;
      line-height: 44px;
    }
    .v_tip{
      position: relative;
      left:0;
      top: -5px;
      color: #fff;
    }
  }
  .sideBar-warpper{
    width: 200px;
    min-height: 400px;
    border: 1px solid #f00;
  }
  .appMain-warpper{
    position: absolute;
    top: 44px;
    left:200px
  }
</style>
