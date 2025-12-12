<template>
    <div>
        <h1>Lista de Produtos</h1>
        <div v-if="produtos.length === 0">
            <p>Nenhum produto cadastrado.</p>
            <router-link to="/novo" class="btn">Adicionar Produto</router-link>
        </div>

        <div v-else>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Detalhes</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in produtos" :key="p.id">
                        <td>{{ p.nome }}</td>
                        <td>{{ p.marca }}</td>
                        <td>R$ {{ p.preco }}</td>
                        <td>{{ p.estoque }}</td>
                        <td><router-link :to="`/produto/${p.id}`">Ver mais</router-link></td>
                        <td>
                            <router-link :to="`/editar/${p.id}`">Editar</router-link> |
                            <a href="#" @click.prevent="deletarProduto(p.id)">Deletar</a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { api } from '../services/api.js';

export default {
    data() {
        return { produtos: [] };
    },
    mounted() {
        this.carregarProdutos();
    },
    methods: {
        carregarProdutos() {
            api.get('/produtos')
                .then(res => this.produtos = res.data)
                .catch(err => console.error(err));
        },
        deletarProduto(id) {
            if (confirm('Tem certeza que deseja deletar?')) {
                api.delete(`/produtos/${id}`)
                    .then(() => this.carregarProdutos())
                    .catch(err => console.error(err));
            }
        }
    }
};
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}

a {
    color: #007BFF;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}
</style>
