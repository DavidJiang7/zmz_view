<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="less">

html, body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "sy-sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

input, button {
  outline: none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
// a:link {
//   color: #42b983;
// }
// a:visited {
//   color: #42b983;
// }
// a:hover {
//   color: #42b983;
// }
// a:active {
//   color: #42b983;
// }
</style>
