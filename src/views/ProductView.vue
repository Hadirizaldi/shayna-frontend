<template>
  <div class="product">
    <header-main />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="defaultImage" alt="" />
                </div>
                <div class=" product-thumbs">
                  <Carousel id="thumbnails" class="product-thumbs-track ps-slider" :items-to-show="3" ref="carousel">
                    <Slide v-for="  (thumb, slide)   in   thumbs  " :key="slide">
                      <div class="carousel__item " @click="changeImage(thumb)">
                        <div :class="{ 'pt': true, 'active': isActive(thumb) }">
                          <img :src="thumb" alt="" />
                        </div>
                      </div>
                    </Slide>
                  </Carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam
                      laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium!
                      Autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi,
                      nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate
                      voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                      Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus
                      voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam
                      quia sit nihil dolores.
                      Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem
                      atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore
                      obcaecati, unde quam
                      impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="cart" class="primary-btn pd-cart">Add To Cart</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
    <relatedProduct />
    <footer-main />
  </div>
</template>

<script>
// for carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import HeaderMain from '@/components/header/HeaderMain.vue';
import FooterMain from '@/components/footer/FooterMain.vue';
import RelatedProductMain from '@/components/RelatedProductMain.vue';

export default {
  name: "ProductView",

  components: {
    HeaderMain,
    FooterMain,
    relatedProduct: RelatedProductMain,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      defaultImage: "/img/mickey1.jpg",
      thumbs: [
        "/img/mickey1.jpg",
        "/img/mickey2.jpg",
        "/img/mickey3.jpg",
        "/img/mickey4.jpg"
      ]
    }
  },
  methods: {
    changeImage(urlImage) {
      this.defaultImage = urlImage;
    },
    isActive(urlImage) {
      return this.defaultImage === urlImage
    }
  },
}
</script>

<style scoped>
.carousel__item {
  margin-right: 1rem;
}
</style>

