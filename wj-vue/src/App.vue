<template>
  <div id="app">
    <body id="body">
      <router-view></router-view>
    </body>
    <Footer id="footer" />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Footer },
};
</script>

<style lang="sass" src="bulma" />

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
// make the foot sticky to bottom
#body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#footer {
  flex: 1;
}
</style>
