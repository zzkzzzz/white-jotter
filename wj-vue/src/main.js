import { createApp } from "vue";
// import { defineAsyncComponent } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import router from "./router";
// import { addRoutes } from "./router";
import { store } from "./store";
import App from "./App.vue";

var axios = require("axios");

// reverse proxy
// frontend request will send to "http://localhost:8443/api"
axios.defaults.baseURL = "http://localhost:8443/api";
axios.defaults.withCredentials = true;

const app = createApp(App);

// element plus ui lib
app.use(ElementPlus);

router.beforeEach((to, from, next) => {
  if (store.state.username && to.path.startsWith("/admin")) {
    initAdminMenu(router, store);
  }
  if (store.state.username && to.path.startsWith("/login")) {
    next({
      name: "Dashboard",
    });
  }
  // 如果前端没有登录信息则直接拦截，如果有则判断后端是否正常登录（防止构造参数绕过）
  if (to.meta.requireAuth) {
    if (store.state.username) {
      axios.get("/authentication").then((resp) => {
        if (resp) {
          next();
        }
      });
    } else {
      next({
        path: "login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error) {
      store.commit("logout");
      router.replace("/login");
    }
    // 返回接口返回的错误信息
    return Promise.reject(error);
  }
);

const initAdminMenu = (router1, store) => {
  // 防止重复触发加载菜单操作
  if (store.state.adminMenus.length > 0) {
    return;
  }
  axios.get("/menu").then((resp) => {
    if (resp && resp.status === 200) {
      var fmtRoutes = formatRoutes(resp.data.result);
      // fmtRoutes.forEach((route) => router.addRoute(route));
      store.commit("initAdminMenu", fmtRoutes);
    }
  });
};

const formatRoutes = (routes) => {
  let fmtRoutes = [];
  routes.forEach((route) => {
    if (route.children) {
      route.children = formatRoutes(route.children);
    }

    let fmtRoute = {
      path: route.path,
      // component: () => import("./components/admin/" + route.component),
      name: route.name,
      nameZh: route.nameZh,
      iconCls: route.iconCls,
      meta: {
        requireAuth: true,
      },
      children: route.children,
    };
    fmtRoutes.push(fmtRoute);
  });

  return fmtRoutes;
};

app.use(router);
app.use(store);

// global access property
app.config.globalProperties.$axios = axios;

app.mount("#app");
