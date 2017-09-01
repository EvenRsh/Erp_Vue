<template>
  <el-menu mode="vertical" unique-opened :default-active="$route.path">
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>

<script lang="">
  import {routesMap} from '@/router'
  import SidebarItem from './SidebarItem'
  export default {
    name: '',
    data() {
      return {
        permission_routers: routesMap
      }
    },
    components: {
      SidebarItem
    },
    methods: {},
    mounted() {

    },
    created() {
//      console.log(this.permission_routers)
    },
  }
</script>

<style lang="">
  a {
    text-decoration: none;
  }
</style>
