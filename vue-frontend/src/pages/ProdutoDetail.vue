<template>
    <div>
        <h1>Detalhes do Produto</h1>
        <div v-if="produto">
            <p><strong>Nome:</strong> {{ produto.nome }}</p>
            <p><strong>Marca:</strong> {{ produto.marca }}</p>
            <p><strong>Preço:</strong> R$ {{ produto.preco }}</p>
            <p><strong>Descrição:</strong> {{ produto.descricao }}</p>
            <p><strong>Estoque:</strong> {{ produto.estoque }}</p>
        </div>
        <div v-else>
            <p>Carregando...</p>
        </div>
        <br />
        <router-link to="/produtos">Voltar à lista</router-link>
    </div>
</template>

<script>
import { api } from '../services/api.js';

export default {
    props: ['id'],
    data() {
        return {
            produto: null
        };
    },
    mounted() {
        this.carregarProduto();
    },
    methods: {
        carregarProduto() {
            api.get(`/produtos/${this.id}`)
                .then(res => this.produto = res.data)
                .catch(err => console.error(err));
        }
    }
};
</script>

<style>
h1 {
    margin-bottom: 20px;
}

p {
    margin: 5px 0;
}
</style>
