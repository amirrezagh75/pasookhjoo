<template>
  <v-app
  app
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
import Nav from '~/components/Nav.vue';
export default {
  components: { Nav },
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

<style lang="scss" scoped>
</style>