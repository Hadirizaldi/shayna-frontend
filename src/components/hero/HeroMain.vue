<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <Carousel id="thumbnails" :items-to-show="1" :wrap-around="true">
      <slide v-for="(image, slide) in backgroundImages" :key="slide">
        <div class="carousel__item">
          <!-- <div class="single-banner-info set-bg" style="background-image: url('/img/hero-2.jpg');"> -->
          <div class="single-banner-info set-bg" :style="{ backgroundImage: 'url(' + image + ')' }">
            <div class="row banner-info">
              <div class="container">
                <div class="col-lg-5">
                  <span>Bag,kids</span>
                  <h1>Black friday</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore
                  </p>
                  <a href="#" class="primary-btn">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>

    </Carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
// for carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: "HeroMain",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      backgroundImages: [
        "/img/hero-1.jpg",
        "/img/hero-2.jpg",
        "/img/hero-3.jpg"
      ]
    }
  }
}
</script>

<style scoped>
.carousel__item {
  width: 100%;
}

.set-bg {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.banner-info {
  height: 725px;
  padding-top: 210px;
  text-align: left;
}

.banner-info span {
  color: #e7ab3c;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 28px;
  display: inline-block;
}

.banner-info h1 {
  color: #252525;
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 6px;
  position: relative;
  opacity: 1;
}

.banner-info p {
  margin-bottom: 42px;
  opacity: 1;
}

.banner-info .primary-btn {
  opacity: 1;
}
</style>
