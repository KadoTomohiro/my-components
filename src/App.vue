<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <MyInput v-model="text"></MyInput> {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyInput from './components/MyInput.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MyInput,
  },
  data() {
    return {
      text: '',
    }
  },
})
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
