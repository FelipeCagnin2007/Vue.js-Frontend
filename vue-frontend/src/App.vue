<template>
  <div id="app">
    <nav>
      <router-link to="/">Home Page</router-link>
      <router-link to="/produtos">Lista de Produtos</router-link>
      <router-link to="/novo">Novo Produto</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007BFF;
}

nav a.router-link-active {
  font-weight: bold;
  color: #0056b3;
}
</style>
