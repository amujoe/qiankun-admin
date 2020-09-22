<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">shop home</router-link> |
      <router-link to="/about">shop About</router-link> | 
      <router-link to="/list">shop List</router-link>
    </div>
    <router-view key="123" />
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
</style>
