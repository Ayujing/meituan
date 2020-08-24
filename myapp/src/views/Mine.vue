<!--快捷键vbase-->
<template>
    <div>
        我的页面
        <!--通过$route.query.属性名 接收传过来的参数  -->
        <!-- {{$route.query.name}} {{$route.query.age}} -->

        <!-- 通过路径传参 $route.params.name  -->
        <!-- 怎么知道他叫name age呢
        通过在 index.js 里设置路径的时候就把属性名设置好-->
        <!-- {{$route.params.name}}
        {{$route.params.age}} -->
        
        <!-- 编程式导航 query传参 -->
        {{$route.query.name}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>