<template>
    <div class="app">
          <b-card-group deck id="card">
 

  <b-card no-body header="DELIVERY & RETURNS">
    

    <b-card-body id="test">
<div class="display"><span class="icon"><i class="far fa-paper-plane"></i></span><p>  Havilah Express</p></div>
     Express delivery in main cities.
    </b-card-body>
  <b-card-body>
<div class="display"><span class="icon"><i class="fas fa-shuttle-van"></i></span><p>Delivery Information</p></div>
Normally delivered between 6 to 10 working days,
Delivery times depend on your local postal service and may vary
    </b-card-body>
  <b-card-body>
<div class="display"><span  class="icon"><i class="fas fa-undo-alt"></i></span><p> Return Policy</p></div>
 Free return within 15 days for Jumia Mall items and 7 days for other eligible items
    </b-card-body>
 
  </b-card>
</b-card-group>
    </div>
</template>
<script>
export default {
    name: 'Servivce',
}
</script>
<style lang="scss" scoped>
    #card{
        padding-left: 100px;
    }

p{
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.icon{
padding-right: 20px;
font-size: 25px;
color: #6c757d;
}
.display{
  display: flex;
}
.app{
margin:20px 0px 50px 0px;
}
@media only screen and (max-width: 500px) and (min-width: 320px){
  #test{
    width: 100%;
    display: none;
  }
}
</style>