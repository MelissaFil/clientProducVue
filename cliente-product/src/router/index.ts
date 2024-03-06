import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import(/* webpackChunkName: "cliente" */ '../views/Clientes.vue')
  },
  {
    path: '/clientes/cadastro',
    name: 'ClientesCadastro',
    component: () => import(/* webpackChunkName: "clientes" */ '../views/ClientesCadastro.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
  },
   {
    path: '/produtos/cadastro',
    name: 'ProdutosCadastro',
    component: () => import(/* webpackChunkName: "produtos" */ '../views/ProdutosCadastro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
