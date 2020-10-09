import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('./../views/Home.vue');
const Contato = () => import('./../views/Contato.vue');
const Cursos = () => import('./../views/Cursos.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
