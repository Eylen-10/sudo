<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Sudo from './components/Sudo.vue'
import { ref,onMounted } from "vue";
const sudo = ref(null);
onMounted(() => {
  console.log('sudo',sudo) // 打印一下，就可以获取dom了
})
function show(){
  sudo.show();
}
</script>

<template>
  <Sudo ref="sudo"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: white; */
  margin-top:-30px;
}
</style>
