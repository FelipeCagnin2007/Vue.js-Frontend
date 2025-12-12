<template>
    <div>
        <h1>Novo Produto</h1>
        <p> <router-link to="/produtos">
                < Voltar à lista</router-link>
        </p>
        <br />
        <ProdutoForm @submit="criarProduto" />
    </div>
</template>

<script>
import ProdutoForm from '../components/ProdutoForm.vue';
import { api } from '../services/api.js';

export default {
    components: { ProdutoForm },
    methods: {
        criarProduto(produto) {
            api.post('/produtos', produto)
                .then(() => this.$router.push('/produtos'))
                .catch(err => console.error(err));
        }
    }
};
</script>
