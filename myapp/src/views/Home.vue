<template>
    <div>
        <button @click="$router.go(-1)">返回</button>
        <button @click="go()">点击跳转到我的页面</button>
        <!--通过$route.params.属性名来获取 params传过来的参数
        {{$route.params.name}} -->
        我是首页{{$route.params.name}} {{$route.params.age}}
        <router-link to="/home/test1">test1</router-link>
        <router-view/>
    </div>
</template>

 <!--// 
    知识点复习    编程式导航
    js方式跳转
    // router.go(n)
    / router.push(n)
 
    //字符串
    router.push('home')
    //对象
    router.push({path:'home'})
    // 命名的路由
    router.push({name:'user',params:{userId:'123'}})
    // 带查询参数 变成/register?plan=private
    router.push({path:'register',query:{plan:'private'}})
  -->          
<script>
    export default {
        methods:{
            go(){ 
                // this.$router.push('/mine')
                
                //传参
                this.$router.push({path:'/mine',query:{name:'zs'}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>