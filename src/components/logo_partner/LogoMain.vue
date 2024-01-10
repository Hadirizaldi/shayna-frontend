<template>
  <!-- Partner Logo Section Begin -->
  <div class="partner-logo">
    <div class="container">
      <Carousel class="logo-carousel " :items-to-show="5" :wrap-around="true">
        <slide v-for="slide in 10" :key="slide">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="/img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
        </slide>
      </Carousel>
    </div>
  </div>
  <!-- Partner Logo Section End -->
</template>

<script>
// for carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  name: "LogoMain",

  components: {
    Carousel,
    Slide,
  }

}
</script>

