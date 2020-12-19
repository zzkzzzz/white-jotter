/** @notice Pre-Load all components for frequently used routes */
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import Library from "../views/Library.vue";

/**
 * @notice Some of less frequented routes uses lazily loaded components
 */

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    // home页面并不需要被访问
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: Index,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/library",
        name: "Library",
        component: Library,
        meta: {
          requireAuth: true,
        },
      },

      // {
      //   path: "/jotter",
      //   name: "Jotter",
      //   component: () => import("../components/jotter/Articles"),
      // },
      // {
      //   path: "/jotter/article",
      //   name: "Article",
      //   component: () => import("../components/jotter/ArticleDetails"),
      // },
      {
        path: "/admin/content/editor",
        name: "Editor",
        component: () => import("../components/admin/content/ArticleEditor"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    props: true,
    meta: {
      requireAuth: true,
    },
  },

  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/admin/AdminIndex"),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () => import("../components/admin/dashboard/admin/index"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/admin/user/profile",
        name: "UserProfile",
        component: () => import("../components/admin/user/UserProfile"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/admin/user/role",
        name: "UserRole",
        component: () => import("../components/admin/user/Role"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/admin/content/book",
        name: "BookManagement",
        component: () => import("../components/admin/content/BookManagement"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/admin/content/banner",
        name: "BannerManagement",
        component: () => import("../components/admin/content/BannerManagement"),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/admin/content/article",
        name: "ArticleManagement",
        component: () =>
          import("../components/admin/content/ArticleManagement"),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    //TODO: Catch all routes (*, /*) must now be defined using a parameter with a custom regex:
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

export default routes;
