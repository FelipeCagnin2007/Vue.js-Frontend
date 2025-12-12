<template>
    <div>
        <h1>Lista de Produtos</h1>

        <!-- Campo de busca -->
        <input type="text" v-model="busca" @input="carregarProdutos" placeholder="Buscar por nome..."
            class="input-busca" />

        <!-- Lista de produtos -->
        <table v-if="produtos.length">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Descrição</th>
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

        <!-- Mensagem quando não há produtos -->
        <div v-else class="sem-produtos">
            <p>Ainda não há produtos cadastrados.</p>
            <router-link to="/novo" class="botao-adicionar">Adicionar Produto</router-link>
        </div>
    </div>
</template>

<script>
import { api } from '../services/api.js';

export default {
    data() {
        return {
            produtos: [],
            busca: '',
        };
    },
    mounted() {
        this.carregarProdutos();
    },
    methods: {
        carregarProdutos() {
            api.get('/produtos', { params: { q: this.busca } })
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
/* Estilo da tabela */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
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

a,
.botao-adicionar {
    color: #007BFF;
    cursor: pointer;
    text-decoration: none;
}

a:hover,
.botao-adicionar:hover {
    text-decoration: underline;
}

/* Campo de busca */
.input-busca {
    padding: 8px;
    width: 300px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Mensagem sem produtos */
.sem-produtos {
    margin-top: 20px;
}

.botao-adicionar {
    display: inline-block;
    margin-top: 10px;
    padding: 6px 12px;
    background-color: #007BFF;
    color: white !important;
    border-radius: 4px;
}

.botao-adicionar:hover {
    background-color: #0056b3;
}
</style>
