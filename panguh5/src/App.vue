<template>
  <div id="nav">
    <router-view v-slot="{ Component,route }">
      <keep-alive>
        <component class="view" :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">

</style>
