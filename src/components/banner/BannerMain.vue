<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel class="product-slider" :items-to-show="3" :autoplay="3500" :wrap-around="true">
            <slide v-for="(product, slide) in products" :key="slide">
              <div class="carousel__item">
                <div class="product-item">
                  <div class="pi-pic">
                    <img :src="product.url" alt="product-image" />
                    <ul>
                      <li class="w-icon active">
                        <a href="#"><i class="icon_bag_alt"></i></a>
                      </li>
                      <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                    </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">{{ product.categoryName }}</div>
                    <a href="#">
                      <h5>{{ product.name }}</h5>
                    </a>
                    <div class="product-price">
                      {{ product.price }}
                    </div>
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
  },

  data() {
    return {
      products: [
        {
          url: " /img/products/women-2.jpg",
          categoryName: "Towel",
          name: "Guangzhou sweater",
          price: "$13.00"
        },
        {
          url: "/img/products/women-1.jpg",
          categoryName: "Towel",
          name: "Pure Pineapple",
          price: "$34.00"
        },
        {
          url: "/img/mickey1.jpg",
          categoryName: "Coat",
          name: "Mickey Baggy",
          price: "$14.00"
        },
        {
          url: "/img/products/women-3.jpg",
          categoryName: "Towel",
          name: "Gray Sweater",
          price: "$18.00"
        },
        {
          url: "/img/products/women-4.jpg",
          categoryName: "Bag",
          name: "Handy Bag",
          price: "$25.00"
        }
      ]

    }
  }
}
</script>

<style scoped>
.carousel__item {
  margin-left: .25rem;
  margin-right: .25rem;
  width: 100%;
}

.pi-pic img {
  height: 31.25rem;
  width: 100%;
}
</style>