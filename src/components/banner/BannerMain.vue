<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel class="product-slider" :items-to-show="3" :autoplay="3500" :wrap-around="true">
            <slide v-for="slide in 6" :key="slide">
              <div class="product-item">
                <div class="pi-pic">
                  <img src="/img/mickey1.jpg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coat</div>
                  <a href="#">
                    <h5>Mickey Baggy</h5>
                  </a>
                  <div class="product-price">
                    $14.00
                    <span>$35.00</span>
                  </div>
                </div>
              </div>
            </slide>

          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// for carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  name: "BannerMain",
  components: {
    Carousel,
    Slide,
  }
}
</script>

<style scoped>
.product-item {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>