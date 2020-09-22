<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/base/about">About</router-link> | 
      <router-link to="/store/">store</router-link> |
      <router-link to="/shop/">shop</router-link>
    </div>
    <router-view key="001" v-show="$route.name"/>

    <!-- 子应用挂载节点 -->
    <div class="content">
      <span>以下是store</span>
      <div id="main" v-show="!$route.name" ></div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  width: 800px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
</style>
