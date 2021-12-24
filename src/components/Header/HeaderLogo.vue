<template>
  <div class="header-logo">
    <img src="@/assets/images/logo.svg" alt="" class="header-logo__img">
  </div>
</template>

<script>
export default {
  name: "HeaderLogo"
}
</script>

<style lang="scss">
.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__img {
    width: 100%;
    max-width: 160px;
  }
}
</style>
