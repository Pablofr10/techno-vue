import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('./../views/Home.vue');
const Contato = () => import('./../views/Contato.vue');
const Cursos = () => import('./../views/Cursos.vue');
const Curso = () => import('./../views/Curso.vue');
const Aula = () => import('./../views/Aula.vue');

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
  {
    path: '/cursos/:curso',
    name: 'curso',
    component: Curso,
    props: true,
    children: [
      {
        path: ':aula',
        name: 'aula',
        component: Aula,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
