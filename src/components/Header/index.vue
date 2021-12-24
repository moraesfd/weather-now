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
};
</script>
<style lang="scss">
header {
  width: 100%;

  nav {
    height: 60px;
  }
}
</style>
