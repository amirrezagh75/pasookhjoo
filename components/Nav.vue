<template>
  <v-container>
    <v-app-bar
    elevation="4"
    color="#f8f0d6"
    rounded="lg"> 
      <v-form>      
        <v-text-field
        class="search"
        placeholder="جستجو"
        filled
        shaped
        single-line
        dense
        />
      </v-form>
       
      <v-spacer/>
      <nuxt-link class='center' to=""><img class='logo' src="../assets/images/logo.png" alt=""></nuxt-link> 
      <v-spacer/>
      <div >
        <v-btn grey v-bind:rounded="true" >
          ورود
        </v-btn>
        <v-btn grey v-bind:rounded="true">
          ثبت نام
        </v-btn>
      </div>
    </v-app-bar>         
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      showRegister: false
    }
  },
  methods: {
    toggleLogin() {
      this.showLogin != this.showLogin
    },
    toggleRegister() {
      this.showRegister != this.showRegister
    }
  }
}
</script>

<style scoped>

.navbar {
  border: royalblue 1px;
  border-radius: 5px;
}

.logo {
  width: 150px;
  height: 60px;
}



.search {
  position: relative;
  top:10px;
  text-align: right;
}

.search >>> input {
  direction: rtl;
  text-align: right;
}


</style>