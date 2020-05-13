<template>
  <div id="Hello">
    <Navbar />
      
 <img :src="productItems[0].imageLink"  id="img" /><br>
<div id="images">
 <img :src="productItems[0].imageLink1" class="images one" @click="switchImg()" />
   <img :src="productItems[0].imageLink2" class="images two" @click="switchImg1()" />
    <img :src="productItems[0].imageLink" class="images three" @click="switchImg2()" />
    </div>
 
    <h1>{{ productItems[0].Name }}</h1>
  <h1>  {{ productItems[0].Price}}</h1>
 
      
       
        <h1>Description</h1>
      <p id="name"> {{ productItems[0].Description }}</p>  
       



       <Productcontent  />
<Service  />


<Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Productcontent from '../components/Productcontent.vue'
import Footer from '../components/footer.vue'
import Service from '../components/Service.vue'
export default {
    name: 'ProductDetails',
    components:{
        Productcontent,
        Navbar,
        Footer,
        Service
      
    },
  
    data() {
     
    return{
           productItems :[],
           img: null,
            img1: null,
             img2: null,
              img3: null
           
        
    }    
    },
    methods:{
switchImg: function(){
this.img = this.img1
},
switchImg1: function(){
this.img = this.img2
},
switchImg2: function(){
this.img = this.img3
},
    },

      created(){
        this.productItems=this.$store.state.products.filter((item)=>{
            return item.id === parseInt(this.$route.params.id);
        });
       this.img = this.productItems[0].imageLink
        this.img1 = this.productItems[0].imageLink1
         this.img2 = this.productItems[0].imageLink2
          this.img3 = this.productItems[0].imageLink3
    }
    
}
</script>
<style scoped>
  *{
padding: 0px;
margin: 0px;
width: 100%;


}
#name{
  font-size: 20px;
}
#card{
  margin-right: 10px;
}
.rows{
  background-color: #f8f9fa;;

}
.one{
  margin-right: 30px;
}
.two{
   margin-right: 70px;
}
.three{
    margin-right: 80px;
}
#Hello{
 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  /* width: 100%; */
}


.images{
    width: 200px;
    height: 200px;
    margin-top: 20px;

}
#img{
    width: 300px;
    height: 300px;
     margin-right: 100px;
}
h1{
    font-weight: bolder;
    font-size: 25px;
    
}
#right{
    padding-right: 60px;
}
#nav{
width: 100%;
}
@media only screen and (max-width: 500px) and (min-width: 320px){
#images{
  display: flex;

}
}

@media only screen and (max-width: 500px) and (min-width: 320px){
  .images{
    display: inline;
    width: 80px;
    height: 100px;

  }
}
</style>