<template>
  <header-main />
  <hero-main />
</template>

<script>

import HeaderMain from '@/components/header/HeaderMain.vue';
import HeroMain from '@/components/hero/HeroMain.vue';

export default {
  name: "HomeView",

  components: {
    HeaderMain,
    HeroMain
  }
}
</script>

