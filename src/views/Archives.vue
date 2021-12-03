<template>
    {{ params }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "基础"
    }
  },
  data() {
      return {
          params: "你好"
      }
  },
  setup(props, context) {
    

  }
})
</script>