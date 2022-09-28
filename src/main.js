import { createApp } from 'vue';
import './assets/scss/style.scss';
import './assets/js/bootstrap';
import App from './components/App.vue';

import { createWebHistory, createRouter } from "vue-router";

// ルーティングするページを読み込む
import TestPage from "./components/pages/Login.vue";
import NotificationPage from "./components/pages/ Notification.vue";

// 各画面のルーティング情報を記述する
const routes = [
  {
    path: "/test",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/notification",
    name: "NotificationPage",
    component: NotificationPage,
  },
];

// 各画面のルーティング情報からルーターを作成する
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// `use` 関数を利用してルーターを使用可能にする
createApp(App).use(router).mount('#app');
