<template>
  <!-- Partner Logo Section Begin -->
  <div class="partner-logo">
    <div class="container">
      <Carousel class="logo-carousel " :items-to-show="5" :wrap-around="true">
        <slide v-for="(logo, slide) in logoUrls" :key="slide">
          <div class="carousel__item">
            <div class="logo-item">
              <div class="tablecell-inner">
                <img :src="logo" alt="logo_partner_image" />
              </div>
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
  },

  data() {
    return {
      logoUrls: [
        "/img/logo-carousel/logo-1.png",
        "/img/logo-carousel/logo-2.png",
        "/img/logo-carousel/logo-3.png",
        "/img/logo-carousel/logo-4.png",
        "/img/logo-carousel/logo-5.png",
      ]
    }
  }

}
</script>

