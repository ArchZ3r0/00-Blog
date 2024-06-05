import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  // 你可以在这里添加更多的路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;