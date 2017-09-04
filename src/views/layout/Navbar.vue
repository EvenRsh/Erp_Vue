<template>
  <div style="width: 100%">
    <!--<el-menu class="navbar" mode="horizontal">-->
    <!--<router-link v-for="tag in Array.from(visitedViews.slice(-6))" :to="tag.path" :key="tag.path">-->
    <!--<el-tag :closable="true" :type="isActive(tag.path)?'primary':''"  @close='closeViewTabs(tag,$event)'>{{tag.name}}</el-tag>-->
    <!--</router-link>-->
    <!--</el-menu>-->

    <el-tabs  type="card" closable v-model="$route.name" @tab-remove="closeViewTabs" >
      <el-tab-pane
        v-for="tag in Array.from(visitedViews.slice(-6))"
        :name="tag.name"
        :key="tag.path"
      >
        <!--<span slot="label">{{tag.name}}</span>-->
        <template slot="label"  >
          <router-link  :to="tag.path" :key="tag.path" >
          <!--<el-tag :closable="true" :type="isActive(tag.path)?'primary':''"  @close='closeViewTabs(tag,$event)'>{{tag.name}}</el-tag>-->
            <span>{{tag.name}}</span>
          </router-link>
        </template>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script lang="">
  import {mapGetters, mapActions} from "vuex"

  export default {
    name: '',
    data() {
      return {
      }
    },
    components: {},
    computed: {
      ...mapGetters([
        'sidebar',
        'visitedViews'
      ]),
    },
    methods: {
      ...mapActions([
        'delVisitedViews',
        'addVisitedViews'
      ]),
      generateRoute() {
//            console.log(this.$route.matched[this.$route.matched.length - 1])
        if (this.$route.matched[this.$route.matched.length - 1].name) {
          return this.$route.matched[this.$route.matched.length - 1]
        }
        this.$route.matched[0].path = '/'
        return this.$route.matched[0]
      },
      isActive(path) {
        return path === this.$route.path
      },
      closeViewTabs(targetName) {
        let tag = {};
        tag.name = targetName;
        let nextTab
        let tabs = this.visitedViews
        for(const [i,v] of tabs.entries()){
          //判断是否只剩最后一个TAB
          if(v.name == targetName && i !=0 ){
            tag.path = v.path
            //关闭后优先选取后一个tab,没有就往前选取
            nextTab = tabs[i + 1] || tabs[i - 1];
            //路由重定向
            this.$router.push(nextTab.path)
            break
          }
        }
        //移除数组
        this.delVisitedViews(tag);
      }
    },
    mounted() {
    },
    created() {

    },
    watch: {
      $route() {
        this.addVisitedViews(this.generateRoute())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-tabs__item{
    a{
      display: inline-block;
    }
  }
</style>
