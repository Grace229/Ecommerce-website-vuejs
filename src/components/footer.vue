<template>
  <div class="hello">
   <div id="container">
     <b-container class="bv-example-row">
  <b-row>
    <b-col class="row">
      <h3> <span style="color:  #FFBF00;background-color: black;"> About </span>Havila</h3>
      <h1 class="info contact">Contact us</h1>
      <ul>
        <li class="mine font"><i class="fas fa-phone-alt"></i>08144275082</li>
        <li class="mine font"><i class="fas fa-envelope"></i>grace@gmail.com</li>
      </ul>
    </b-col>
    <b-col class="row1">
      <h1 class="info">Information</h1>
      <ul>
    <a href=""><li class="mine">Sell on havilla</li></a>
        <a href=""><li class="mine">About us</li></a>
         <a href=""><li class="mine">privacy policy</li></a>
          <a href=""><li class="mine">Discount</li></a>
           <a href=""><li class="mine">stay safe</li></a>
      </ul>
      
      </b-col>
    <b-col class="row2">
        <h1  class="info">Make money</h1>
      <ul>
       <a href=""><li class="mine">Sell on havilla</li></a>
        <a href=""><li class="mine">Become a sales consultative</li></a>
         <a href=""><li class="mine">Become an Affiliate partner</li></a>
          <a href=""><li class="mine">Become a sales consultative</li></a>
           <a href=""><li class="mine">Become a logistic Service Partner</li></a>
      </ul>
    </b-col>
    <b-col class="row3">
      <h1  class="info">Subscribe for info</h1>
     <div class="text">
      <i class="far fa-envelope"></i>
        <input type="text" placeholder="Enter your email" id="text">
      </div>
       <b-button href="#" variant="warning" id="btn">Subscribe</b-button>
    </b-col>
  </b-row>
  <div id="border"></div>
   <b-row>
    <b-col>
    <h1  class="info">follow us</h1>
      <ul class="social">
      <li><i class="fab fa-facebook"></i></li>
      <li><i class="fab fa-google-plus"></i></li>
      <li><i class="fab fa-twitter-square"></i></li>
       <li><i class="fab fa-youtube-square"></i></li>
       <li><i class="fab fa-linkedin"></i></li>
    </ul>
    </b-col>
    <b-col>
     <h1 class="info">Payment method</h1>
    <ul class="social">
      <li><i class="fab fa-cc-paypal"></i></li>
      <li><i class="fab fa-apple-pay"></i></li>
      <li><i class="fab fa-cc-mastercard"></i></li>
      <li><i class="fab fa-cc-visa"></i></li>
       
    </ul>
    </b-col>
    <b-col><em><p id="copy"><i class="fas fa-copyright"></i>2020 havila.ltd.All rights reserved</p></em></b-col>
  </b-row>
</b-container>

   </div>


  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
h3{
  background-color: #FFBF00;
  color: black;
  height: 20px;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  margin-top: 5px;
}
#copy{
  color: #eeeeee;
}
.fas.fa-phone-alt{
  
  color: #FFBF00;
  font-size: 20px;
}
.fas.fa-envelope{
color: #FFBF00;
 font-size: 20px;
}
.i{
  color: #FFBF00;
}
.contact{
  margin-top: 90px;
  margin-right: 50px;
}
.info{
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
@media only screen and (max-width: 500px) and (min-width: 320px){
  #btn{
    width: max-content;
  }
}
.social {
  display: flex;
}
.mine{
  color: white;
  background-color: black;
  font-size: 15px;
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  
}
.social li{
  font-size: 40px;
  padding: 10px;
  color: #FFBF00;
}
#container{
  background-color: black;
  height: auto;
  clear: both;
  width: 100%;
}

.row1{
  margin-right: 50px;
}
.row2{
  margin-right: 100px;
}
#text{
    border: none;
    background-color: white;
    outline-style: none;
    padding-right: 20px;
}
.text{
    width: 100%;
    background-color: white;
    padding: 4px;
    border-radius: 15px;
    display: flex;
    margin-bottom: 20px;
}
.far.fa-envelope{
    color: gray;
    font-size: 20px;
    padding-left: 20px;
    
}
::placeholder{
  padding-left: 60px;
}
#border{
  border-bottom: 2px solid white;
}
.info{
  color:  #FFBF00;
}
ul li{
  list-style-type: none;

}
.mine:hover{
 color: #FFBF00;
  padding: 5px;
}
a:link{
 
     text-decoration: none;
  }

</style>