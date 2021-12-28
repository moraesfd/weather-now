<template>
  <header>
    <nav>
      <HeaderLogo />
    </nav>
  </header>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue'
export default {
  name: 'HeaderComponent',
  components: {
    HeaderLogo
  }
}
</script>

<style lang="scss">
header {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1025px;
  z-index: 2;

  nav {
    height: 55px;
    border-bottom: 1px sol rgba(51, 51, 51, 0.1);
    background-color: white;
    border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  }
}
</style>
