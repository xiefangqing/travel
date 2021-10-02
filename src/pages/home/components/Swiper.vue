<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://travel.12306.cn/imgs/resources/uploadfiles/images/b0c76b21-531b-4af4-a607-cf5672c72ded_product_W572_H370.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://travel.12306.cn/imgs/resources/uploadfiles/images/c7c03732-3c86-4308-aea7-df747d4999e8_product_W572_H370.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff !important
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
    height: 2.34rem
</style>
