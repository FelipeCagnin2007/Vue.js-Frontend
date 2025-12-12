<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="form-group">
      <label>Nome:</label>
      <input v-model="produto.nome" required placeholder="Smartphone Samsung Galaxy S23" />
    </div>

    <div class="form-group">
      <label>Descrição:</label>
      <input v-model="produto.descricao" required placeholder="128GB, 8GB RAM, Tela 6.1' , Câmera Tripla 50MP" />
    </div>

    <div class="form-group">
      <label>Marca:</label>
      <input v-model="produto.marca" required placeholder="Samsung" />
    </div>

    <div class="form-group">
      <label>Preço:</label>
      <input type="number" v-model.number="produto.preco" step="0.01" min="0" required />
    </div>


    <div class="form-group">
      <label>Estoque:</label>
      <input type="number" v-model.number="produto.estoque" required />
    </div>

    <button type="submit">{{ produto.id ? 'Atualizar' : 'Criar' }}</button>
  </form>
</template>

<script>
export default {
  props: {
    produtoInicial: {
      type: Object,
      default: () => ({ nome: '', descricao: '', marca: '', preco: 0, estoque: 0 })
    }
  },
  data() {
    return {
      produto: { ...this.produtoInicial }
    };
  },
  watch: {
    produtoInicial: {
      handler(novoProduto) {
        this.produto = { ...novoProduto };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.produto);
    }
  }
};
</script>

<style>
.form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 3px;
}

.form-group input {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

button {
  padding: 8px 12px;
  background-color: #007BFF;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
