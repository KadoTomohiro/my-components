<template>
<div>
  {{msg}}
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: {type: String}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
