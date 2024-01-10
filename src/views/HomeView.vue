<template>
  <header-main />
  <hero-main />
  <banner-main />
</template>

<script>

import HeaderMain from '@/components/header/HeaderMain.vue';
import HeroMain from '@/components/hero/HeroMain.vue';
import BannerMain from '@/components/banner/BannerMain.vue';


export default {
  name: "HomeView",

  components: {
    HeaderMain,
    HeroMain,
    BannerMain
  }
}
</script>

