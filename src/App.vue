<!-- 以vue为后缀的文件，叫单文件组件，是局部组件，使用需要注册 -->

<!-- 组件的模板 -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<!-- 组件的逻辑 -->
<script>
// 这是个叫App的组件
export default {
  name: 'App'
}
</script>

<!-- 组件的css样式 -->
<style>

</style>
