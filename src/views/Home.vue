<template>
  <div class="home">
    <HeaderComponent />
    <WeatherComponent />
    <FooterComponent
      info="Weather Now - Uma aplicação teste que mostra a temperatura agora"
    />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import WeatherComponent from '@/components/Weather';
import FooterComponent from '@/components/Footer'

export default {
  name: 'HomePage',
  metaInfo() {
    return {
      title: "Weather Now",
      meta: [
        {
          name: "description",
          content:
            "Weather Now - Uma aplicação teste que mostra a temperatura agora",
        },
        {
          property: "og:title",
          content: "Weather Now",
        },
        { property: "og:site_name", content: "Weather Now" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
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
