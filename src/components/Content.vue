
<template>
  <div class="hello">
     
    <b-container class="bv-example-row bv-example-row-flex-cols">


  <b-row align-v="center">
    <b-col>
       <div id="container"  :to="`/product/${content.id}-${content.Name.replace(/['']+/g,'-').toLowerCase()}`"> 
  <b-card  
  :title="content.Name"
    :img-src="content.imageLink"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"

  >
    <b-card-text>
     <span id="price">  &#8358;{{ content.Price }} </span>
    </b-card-text>

    <b-button variant="warning" :to="`/product/${content.id}-${content.Name.replace(/['']+/g,'-').toLowerCase()}`"
    >Shop now</b-button>
  </b-card>
</div>
    </b-col>
   
  </b-row>

 
</b-container>




  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['content'],

  }

  
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    margin-bottom: 20px;
    float: right; 
  
  
}
#container{

  padding-right: 30px;
  
}
img{
  height: 250px;
  width: 250px;

}
#price{
font-weight: bolder;
font-size: 25px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
