<template>
  <el-menu
    :default-active="currentPath"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px"
    @select="handleSelect"
  >
    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>

    <!-- <em
      class="el-icon-menu"
      style="float:right;font-size: 45px;color: #222;padding-top: 8px"
    ></em> -->
    <span
      style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold"
      >White Jotter - Your Mind Palace</span
    >
    <el-input
      placeholder="快速搜索..."
      prefix-icon="el-icon-search"
      size="medium"
      style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
      v-model="keywords"
    >
    </el-input>
    <em
      class="el-icon-switch-button"
      v-on:click="logout"
      style="float:right;font-size: 40px;color: #222;padding: 10px"
    ></em>
  </el-menu>
</template>

<script>
// import router from "../router";

export default {
  name: "NavMenu",
  data() {
    return {
      navList: [
        { name: "/index", navItem: "Home" },
        { name: "/jotter", navItem: "Notebook" },
        { name: "/library", navItem: "Libary" },
        { name: "/admin", navItem: "Profile" },
      ],
      keywords: "",
    };
  },
  methods: {
    logout() {
      var _this = this;
      this.$axios.get("/logout").then((resp) => {
        if (resp.data.code === 200) {
          _this.$store.commit("logout");
          _this.$router.replace("/login");
          // 清空路由，防止路由重复加载
          // const newRouter = router;
          // _this.$router.matcher = newRouter.matcher;
        }
      });
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$route.path);
      console.log(this.$route.query);
    },
    hoverBackground() {
      return "#ffd04b";
    },
    currentPath() {
      var x = this.$route.path.indexOf("/", 1);
      if (x !== -1) {
        return this.$route.path.substring(0, x);
      } else {
        return this.$route.path;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}

.el-icon-switch-button {
  cursor: pointer;
  outline: 0;
}
</style>
