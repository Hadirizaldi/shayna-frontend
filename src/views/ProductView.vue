<template>
  <div class="product">
    <header-main />
    <footer-main />
  </div>
</template>

<script>

import HeaderMain from '@/components/header/HeaderMain.vue';
import FooterMain from '@/components/footer/FooterMain.vue';

export default {
  name: "ProductView",

  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

