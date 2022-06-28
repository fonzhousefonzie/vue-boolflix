<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <footer class="py-3"></footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Thin.ttf") format("truetype");
  font-weight: 100;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Light.ttf") format("truetype");
  font-weight: 300;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Medium.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Bold.ttf") format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("assets/NetflixSans-Black.ttf") format("truetype");
  font-weight: 900;
}

#app {
  font-family: "Neflix Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background: #141414;
  min-height: 100vh;
  padding-top: 4rem;
}
</style>
