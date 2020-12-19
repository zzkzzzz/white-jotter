<template>
  <el-menu
    class="categories is-flex ml-6"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
  >
    <el-menu-item index="0" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">ALL</slot>
    </el-menu-item>
    <el-menu-item index="1" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Arts</slot>
    </el-menu-item>
    <el-menu-item index="2" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Fashion</slot>
    </el-menu-item>
    <el-menu-item index="3" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Culture</slot>
    </el-menu-item>
    <el-menu-item index="4" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Life</slot>
    </el-menu-item>
    <el-menu-item index="5" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Management</slot>
    </el-menu-item>
    <el-menu-item index="6" class="left">
      <em class="el-icon-menu"></em>
      <slot name="title">Technology</slot>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      cid: "",
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      this.cid = key;
      // emit parent component event 'indexSelect' in Library.vue
      this.$emit("indexSelect");
      console.log(keyPath);
    },
  },
};
</script>

<style scoped>
.categories {
  flex-direction: column;
  justify-content: left;
  align-content: center;
}

.left {
  text-align: left;
}
</style>
