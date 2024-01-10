<template>
  <div class="product">
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
import FooterMain from '@/components/footer/FooterMain.vue'


export default {
  name: "product",

  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

