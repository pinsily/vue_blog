<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/detail">详情页</router-link>
    <router-link @click="jumpPage('这是传参的归档页')">归档页</router-link>
  </nav>
  <router-view></router-view>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue';
import router from "./router/index"

import { defineComponent } from 'vue'

function jumpPage(params:String) {
  // router.push({
  //   path: "/archives"
  // })
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
