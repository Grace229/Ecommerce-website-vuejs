<template>
  <div class="hello">
  <ul>
    <li>{{ category.Name }}  
</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Category',
 props: ['category']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
ul{
  padding: 0px;
}

ul li{
  list-style-type: none;
  margin: 0px;
 display: inline-block;
  padding: 5px;
  margin-bottom: 10px;
border-bottom: 1px solid #FFBF00;
border-bottom: 1px solid #FFBF00;

font-size: 25px;
font-weight: bolder;

}
 ul :hover{
    background-color:#FFBF00;
    color: white;
    opacity: .8;
}


.hello{
  width: 20%;}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="hello"] {
    width: 100%;
  }
}
</style>
