<template>
  <input type="text" :value="value" @input="onInput" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MyInput',
  props: {
    value: { type: String, required: false, default: '' },
  },
  methods: {
    onInput(e: InputEvent) {
      this.$emit('input', (e.target as HTMLInputElement).value)
    },
  },
})
</script>

<style scoped></style>
