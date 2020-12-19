<template>
  <div>
    <NavMenu />
    <router-view />
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";

export default {
  name: "Home",
  components: { NavMenu },
};
</script>

<style scoped></style>
