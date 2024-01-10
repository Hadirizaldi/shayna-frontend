<template>
  <div class="home">
    <header-main />
    <hero-main />
    <banner-main />
    <insta-gallery />
    <logo-main />
    <footer-main />
  </div>
</template>

<script>

import HeaderMain from '@/components/header/HeaderMain.vue';
import HeroMain from '@/components/hero/HeroMain.vue';
import BannerMain from '@/components/banner/BannerMain.vue';
import InstaGallery from '@/components/InstaGallery.vue';
import LogoMain from '@/components/logo_partner/LogoMain.vue';
import FooterMain from '@/components/footer/FooterMain.vue';


export default {
  name: "home",

  components: {
    HeaderMain,
    HeroMain,
    BannerMain,
    InstaGallery,
    LogoMain,
    FooterMain
  }
}
</script>

