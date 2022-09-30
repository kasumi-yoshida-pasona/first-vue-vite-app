import { createApp } from 'vue';
import './assets/scss/style.scss';
import './assets/js/bootstrap';
import App from './components/App.vue';
import 'v-calendar/dist/style.css';

import { createWebHistory, createRouter } from "vue-router";
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

// ルーティングするページを読み込む
import TestPage from "./components/pages/ Admin/Login.vue";
import NotificationPage from "./components/pages/ Notification.vue";
import RecordPage from "./components/pages/Record.vue";
import ListenPage from "./components/pages/Listen.vue";

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
  {
    path: "/record",
    name: "RecordPage",
    component: RecordPage,
  },
  {
    path: "/listen",
    name: "ListenPage",
    component: ListenPage,
  },
];

// 各画面のルーティング情報からルーターを作成する
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// `use` 関数を利用してルーターを使用可能にする
// createApp(App).use(router).mount('#app');
createApp(App)
  .use(router)
  .use(SetupCalendar)
  .mount('#app');
