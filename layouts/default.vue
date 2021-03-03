<template>
  <div>
    <v-app>
      <Nav />
      <Nuxt />
    </v-app>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue';
export default {
  components: { Nav },
  data() {
    return {};
  },
};
</script>
