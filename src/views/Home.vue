<template>
  <div class="home">
    <HeaderComponent />
    <WeatherComponent />
    <FooterComponent
      info="Teste de desenvolvimento Front-End realizado para a vaga na Conta Azul. 2021."
    />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import WeatherComponent from '@/components/Weather';
import FooterComponent from '@/components/Footer'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    WeatherComponent,
    FooterComponent
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
