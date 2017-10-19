<template>
    <div class="menu-wrapper">
      <div style="background-color: #ff9827; height: 50px;text-align: center;line-height: 50px;">ERP</div>
      <template v-for="item in routes">
        <el-submenu :index="item.path" v-if="!item.noDropdown">
          <template slot="title">{{item.name}}</template>
          <template v-if="item.children" v-for="child in item.children">
            <sidebar-item class='nest-menu' v-if='child.children' :routes='[child]'> </sidebar-item>
            <router-link v-else :to="item.path+'/'+child.path" >
              <el-menu-item :index="item.path+'/'+child.path">
                {{child.name}}
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>
    </div>
</template>

<script lang="">
    export default {
        name: 'SidebarItem',
        props: {
        routes: {
          type: Array
        }
      },
        data() {
            return {}
        },
        components: {},
        methods: {},
        mounted() {

        },
        created() {
//          console.log(routes)
        },
    }
</script>

<style lang="">

</style>
