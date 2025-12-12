<template>
  <div class="home-container">
    <h1>Teste Técnico – Constr Up</h1>
    <p>Criado por Felipe Cagnin de Lima.</p>
    <router-link to="/produtos" class="btn">Ir para Lista de Produtos</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 2rem;
}

.home-container h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.home-container p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #369870;
}
</style>
