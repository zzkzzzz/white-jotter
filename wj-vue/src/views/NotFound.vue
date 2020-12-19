<template>
  <body>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Page Not Found
          </h1>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="notification ">
        You will be redirected back to the previous page in 5 seconds.
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "notFound",
  data() {
    return {
      //Timeout data object that can be referenced to clear if user navigates away before timeout
      timeout: setTimeout(
        (router) => {
          // Navigate back to last location if possible. 2 as user's default home page may not be a blank tab
          if (window.history.length > 2) router.back();
          // Else, redirect back home
          else router.replace({ name: "login" });
        },
        5000,
        this.$router
      ),
    };
  },
  beforeUnmount() {
    // Prevent the timeout from still routing to home if user already navigated away themselves
    clearTimeout(this.timeout);
  },
};
</script>
