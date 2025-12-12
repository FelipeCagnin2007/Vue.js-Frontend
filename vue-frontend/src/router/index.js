import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ProdutoList from '../pages/ProdutoList.vue';
import ProdutoCreate from '../pages/ProdutoCreate.vue';
import ProdutoEdit from '../pages/ProdutoEdit.vue';
import ProdutoDetail from '../pages/ProdutoDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/produtos', name: 'Lista', component: ProdutoList },
  { path: '/novo', name: 'Criar', component: ProdutoCreate },
  { path: '/editar/:id', name: 'Editar', component: ProdutoEdit, props: true },
  { path: '/produto/:id', name: 'Detalhes', component: ProdutoDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
