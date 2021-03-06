<template>
<v-footer
      v-bind="localAttrs"
      padless
      app
    >
      <v-card
        flat
        rounded="lg"
        tile
        width="100%"
        class="lighten-1 text-center"
        color="deep-purple accent-4"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>پاسخجو</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>