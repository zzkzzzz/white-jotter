<template>
  <div
    style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center"
  >
    <!-- When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on or @ when listening for key events: -->
    <el-input
      @keyup.enter="searchClick"
      placeholder="Enter author name or book title..."
      prefix-icon="el-icon-search"
      size="small"
      style="width: 400px;margin-right: 10px"
      v-model="keywords"
    >
    </el-input>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-search"
      @click="searchClick"
      >Search</el-button
    >
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keywords: "",
      books: [],
      cardLoading: [],
    };
  },

  methods: {
    searchClick() {
      // emit parent component event in Books.vue
      this.$emit("onSearch");
    },
  },
};
</script>

<style scoped></style>
