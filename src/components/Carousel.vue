<template>
  <div id="app">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem
       v-for="image in items" :key='image.id'>
      <img :src="image.imageLink"  id="image"> 
      </SliderItem>
      
    </Slider>
  </div>
</template>
<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "App",
  components: {
    Slider,
    SliderItem
  },
 data(){
    return{
    items:[
      {
        id: 1,
        imageLink: require('@/assets/carosel4.jpg')
      },
       {
        id: 2,
           imageLink: require('@/assets/carosel5.jpg'),
      },
       {
        id: 3,
        imageLink: require('@/assets/carosel7.jpg'),
      },
       {
        id: 4,
         imageLink: require('@/assets/carosel6.jpg'),

      },
    
    ],
sliderValue: 2
  }
 }
};
</script>

<style lang="scss" scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin: 0;
}
#image{
width: 100%;
height: 95%;
}
</style>
