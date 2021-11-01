<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">搜尋</router-link> |
      <!-- <router-link to="/?check=record">Record</router-link> | -->
      <router-link to="/about">收藏</router-link>
    </div> 
    <router-view/>
  </div>
</template>




<style>
* {
  position: relative;
  margin: 0;
  padding: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f7f7f7;

  background: linear-gradient(90deg, #555454, #121212);
}


#nav {
  padding: 30px;
}

#nav a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #7a7a7a;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
