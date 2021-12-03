
<template>
    <div>
      <p>这是详情页</p>
      <button @click="onClick">{{message}}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "基础"
    }
  },
  setup(props, context) {
    console.log("props=>"+props)
    console.log(context);
    
  },
  data() {
    return {
      message: this.$props.msg
    }
  },
  components: {
    // Pagination
  },
  
  methods: {
    onClick(e: Event) {
      console.log(e)
    }
  },
  beforeCreate () {
    console.log("开始创建")
  }
})
</script>

<style scoped>

</style>