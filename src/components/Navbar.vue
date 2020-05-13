<template>
  <div class="hello" style="margin-bottom: 80px;">
   

<div >
  <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
   <b-navbar-brand id="test" href="#">Havilah</b-navbar-brand>
  
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      <b-nav-item href="#"> <b>Contact us</b> </b-nav-item>
      <b-nav-item href="#" ><b>Shopping<i class="fas fa-cart-arrow-down"></i></b></b-nav-item> 

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
       
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           <b> <em>User</em></b>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.fas.fa-cart-arrow-down{
  font-size: 20px;
  color: white;
}
#test{
  font-weight: bold;
  font-size: 25px;
}
b:hover{
  background-color: white;
  color: #FFBF00 !important;
  padding : 4px;
 
}

</style>
