  <!-- 路由传参 三种方法

  1、params
  刷新了就没了
  2、query
  刷新了还存在 平时用的比较多
  3、通过url传参 -->
<template>
  <div id="app">
   <!-- 美团外卖 -->
   <!-- <router-link to="/home">首页</router-link> -->

   <!-- params 传参 -->
   <router-link :to="{name:'home',params:{name:'zs',age:10}}">首页</router-link>
   
   <!-- <router-link to="/mine">我的</router-link> -->
  
  <!-- query 传参 -->
   <router-link :to="{path:'mine',query:{name:'lis',age:20}}">我的</router-link>

  <!-- 路径跳转传参 -->
   <router-link to="/mine/zs/18">我的</router-link>

  <!-- 路由占位符 -->
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}


</script>
<style lang="scss">

</style>

