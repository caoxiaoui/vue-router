<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body {
  margin: 0;
  padding: 0;
  overflow: auto;
  overflow-x: auto;
}
ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}
body::-webkit-scrollbar {
    width: 10px;
}
body::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(165, 165, 165, 0.4);
}
body::-webkit-scrollbar-track {
    border-radius: 4px;
    background: rgba(206, 204, 204, 0.4);
}

</style>
