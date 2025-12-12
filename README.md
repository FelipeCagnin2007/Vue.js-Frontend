# Vue.js-Frontend

Interface em Vue para consumir a API Laravel.

Tarefas:
- Listar produtos
- Criar produto
- Editar produto
- Excluir produto

1. Pré-requisitos
Node.js 24+
NPM 11+

2. Clonar o repositório
git clone https://github.com/FelipeCagnin2007/Vue.js-Frontend.git

Abra o projeto em um editor de arquivos, como o VSCode:

cd vue-frontend

3. Instalar dependências
npm install

4. Configurar a URL da API
No arquivo src/services/api.js, verifique se a baseURL aponta para o backend:
import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

5. Rodar o frontend
npm run dev

O projeto ficará disponível em:
http://localhost:5173

6. Testar
Acesse o site pelo navegador
Liste, crie, edite e exclua produtos usando a interface
