<template>
  <div class="app">


  <div>

      <b-form-group id="input-group-3" label="Size:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.Size"
          :options="Sizes"
          required
        ></b-form-select>
      </b-form-group>
  </div>
 <div>

      <b-form-group id="input-group-3" label="Color:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.color"
          :options="colors"
          required
        ></b-form-select>
      </b-form-group>
  </div>
<div id="display">
<b-button variant="warning" id="btn"><i class="fas fa-cart-arrow-down"></i> Add to cart</b-button>
</div>


  

  
 

    

  </div>
</template>
<script>
export default {
  name: 'Productcontent',
 data() {
      return {
        form: {
         
          Size: null,
          color: null,
          checked: []
        },
        Sizes: [
            { text: 'Select Size', value: null }, 'S', 'M', 'L', 'XL','XLX'],
 colors: [
            { text: 'Select Color', value: null }, 'Blue', 'Black', 'white', 'Red'],
        show: true
      }
    },
  
}
  
</script>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin:33px 0px 0px 0px;
  


}
#btn{
  width: 100%;
  font-size: 16px;
  font-weight: bolder;
  color: white;
 
 
  // text-align: center;
}
.fas.fa-cart-arrow-down{
  margin-left: 20px;
}
@media only screen and (max-width: 500px) and (min-width: 320px){
  #btn{
    width: max-content;
  }
}
@media screen and (max-width: 500px) and (min-width: 320px){
  #input-group-3{
    width: max-content;
  }
}
#display{
  font-size: 25px;
}


</style>
