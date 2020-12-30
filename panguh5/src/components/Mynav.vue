<template>
  <van-nav-bar
    :title="meta"
    :left-arrow="arrow"
    safe-area-inset-top
    @click-left="onClickLeft"
  />
  <!-- <Popup :showpopup="showpopup" @close_popup="close_popup" /> -->
</template>

<script lang="ts">
import { onMounted, ref, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
import getMeta from './../hooks/getMeta'

// import Popup from "@views/popup";

export default defineComponent({
  name: "Mynav",
  props: {
  },
  components: {
    // Popup,
  },
  setup() {
    const router = useRouter();
    const metaInfo = getMeta()
    const flag = ref<Boolean>(true); // 点击设置弹窗显示一次
    const showpopup = ref<Boolean>(false); // 挽留弹窗显示/隐藏
    //关闭弹窗
    const close_popup = (): void => {
      flag.value = false;
      showpopup.value = false;
    };
    const onClickLeft = (): void => {
      if (metaInfo.meta == "豆神大语文提分班-迎新" && flag.value == true) {
        showpopup.value = true;
      }
      router.go(-1)
    };
    onMounted(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    return {
      ...toRefs(metaInfo),
      showpopup,
      close_popup,
      onClickLeft,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>