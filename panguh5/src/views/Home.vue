<template>
  <Mynav/>
  我是主页
</template>

<script lang="ts">
import Mynav from "@/components/Mynav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    Mynav,
  },
});
</script>

<style lang="scss" scoped>
</style>