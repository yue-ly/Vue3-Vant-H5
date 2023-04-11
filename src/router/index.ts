import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页',
      },
      component: () => import('@/layout/index.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(), // history 模式则使用 createWebHistory()
    routes,
  });
  export default router;