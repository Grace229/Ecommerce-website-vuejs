<template>
  <div id="appy">
    <div id="nav">
   <!-- <router-view/> -->
  
     <Navbar />
      
<b-container class="bv-example-row">

  <b-row>
 <b-col cols="3"><Category v-for="item in items" :category='item' :key='item.id' /></b-col>
    <b-col cols="9">
       <p><Carousel /></p>
     </b-col>
  </b-row>
</b-container>
<h1 style="text-align: center;margin-bottom: 20px"> OUR PRODUCTS</h1>
 <Content v-for="product in products" :content='product' :key='product.id' />
     <Footer />
    </div>
   
  </div>
</template>
<script>
    import Navbar from '../components/Navbar.vue'
    import Category from '../components/Category.vue'
  import Content from '../components/Content.vue'
   import Carousel from '../components/Carousel.vue'
    import Footer from '../components/footer.vue'
export default {
  name: 'Home',
  components:{
Navbar,
Category,
Content,
Carousel,
Footer
  },
  data(){
    return{
    items:[
      {
        id: 1,
        Name: 'Shoes'
      },
       {
        id: 2,
        Name: 'Clothes'
      },
       {
        id: 3,
        Name: 'Bag'
      },
       {
        id: 4,
        Name: 'Accesories',

      },
       {
        id: 5,
        Name: 'Cosmetics'
      },
 {
        id: 5,
        Name: 'Gadgets'
      },
    ],
products: this.$store.state.products,
//     products:[
//       {
//         id: 1,
//         Name: 'Hoodie',
//         Price: '#10000',
//         imageLink: require('../assets/cloth1.jpg'),
       
//       },
//        {
//         id: 2,
//         Name: 'Make-up set',
//         Price: '#25000',
//         imageLink: require('../assets/cosme.jpg'),
//       },
//        {
//         id: 3,
//          Name: 'Smart watch',
//         Price: '#50000',
//         imageLink: require('../assets/gadget.jpg'),
//       },
//  {
//         id: 4,
//          Name: 'Shoes',
//         Price: '#15500',
//         imageLink: require('../assets/shoe1.jpg'),
//       },
//         {
//         id: 5,
//          Name: 'Laptop',
//         Price: '#350000',
//         imageLink: require('../assets/gadget1.jpg'),
//       },
//   {
//         id: 6,
//          Name: 'Shoes',
//         Price: '#15000',
//         imageLink: require('../assets/shoe.jpg'),
//       },
//        {
//         id: 7,
//          Name: 'Infant Wears',
//         Price: '#5000',
//         imageLink: require('../assets/infant.jpg'),
//       },
//        {
//         id: 8,
//          Name: 'Jewelries',
//         Price: '#9500',
//         imageLink: require('../assets/jewel1.jpg'),
//       },
  

 
//       ]
  }
  },
};
</script>

<style lang="scss" scooped>
#appy {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: black;
  // background-color: blue;
  margin-bottom: 30px;


}

#nav {
 height: 800px;
 width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
