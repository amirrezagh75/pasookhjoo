<template>
  <div class="container">
    <!-- <p>
      hello
    </p>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
      @click="getInfo"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>

    <v-text-field
      v-model="SearchKey"
      label="Main input"
      hide-details="auto"
    ></v-text-field> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
    }
  },
  head() {
    return {
      title: 'صفحه نخست',
      SearchKey:'',
    }
  },
  methods: {
    async getInfo() {
      const res = await this.$axios
      .get('/api/showPosts' , {
        params : {
          search : this.SearchKey
        }
      })
      console.log(res.data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
