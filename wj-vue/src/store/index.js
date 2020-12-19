import { createStore } from "vuex";

// export const store = createStore({
//   state() {
//     return {
//       user: {
//         username:
//           window.localStorage.getItem("user" || "[]") == null
//             ? ""
//             : JSON.parse(window.localStorage.getItem("user" || "[]")).username,
//       },
//     };
//   },
//   mutations: {
//     login(state, user) {
//       state.user = user;
//       window.localStorage.setItem("user", JSON.stringify(user));
//     },

//     logout(state) {
//       state.user = [];
//       window.localStorage.removeItem("user");
//     },
//   },
// });

export const store = createStore({
  state() {
    return {
      username:
        window.localStorage.getItem("username") == null
          ? ""
          : JSON.parse(window.localStorage.getItem("username" || "[]")),
      adminMenus: [],
    };
  },
  mutations: {
    initAdminMenu(state, menus) {
      state.adminMenus = menus;
    },
    login(state, data) {
      state.username = data;
      window.localStorage.setItem("username", JSON.stringify(data));
    },
    logout(state) {
      // 注意不能用 null 清除，否则将无法判断 user 里具体的内容
      state.username = "";
      window.localStorage.removeItem("username");
      state.adminMenus = [];
    },
  },
});
