<template>
    <div>
        <h1>Editar Produto</h1>
        <p> <router-link to="/produtos">
                < Voltar à lista</router-link>
        </p>
        <br />
        <ProdutoForm v-if="produto" :produtoInicial="produto" @submit="atualizarProduto" />
        <p v-else>Carregando...</p>
    </div>
</template>

<script>
import ProdutoForm from '../components/ProdutoForm.vue';
import { api } from '../services/api.js';

export default {
    components: { ProdutoForm },
    props: ['id'],
    data() {
        return { produto: null };
    },
    mounted() {
        api.get(`/produtos/${this.id}`)
            .then(res => this.produto = res.data)
            .catch(err => console.error(err));
    },
    methods: {
        atualizarProduto(produto) {
            api.put(`/produtos/${this.id}`, produto)
                .then(() => this.$router.push('/produtos'))
                .catch(err => console.error(err));
        }
    }
};
</script>
