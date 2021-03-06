<template>
  <v-app
  app
  color="white"
  flat
  >
    <Header />

    <v-main>

      <v-container fluid>

        <Nuxt />

      </v-container>

    </v-main>

    <Footer />
    
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      changeRTL () {
        this.$vuetify.rtl = true
      
      },
  }
}
</script>