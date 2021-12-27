<template>
  <footer class="footer">
    <h1 class="footer__info">{{ info }}</h1>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    info: String
  }
}
</script>

<style lang="scss">
.footer {
  height: 100%;
  max-height: 60px;

  &__info {
    color: $color-dark-gray;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: 20px 15px;
  }
}
</style>
