<template>
  <div id="app" v-cloak>
    <router-view class="view" />
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
[v-cloak] {
  display: none;
}
</style>
