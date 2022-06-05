<template>
  <v-container fluid style="background: #aadff7; height: 100%">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/home-logo.gif')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Labo Jeux JavaScript</h1>

        <p class="subheading font-weight-regular">
          <a href="https://github.com/MartinsAlexandre/myGames" target="_blank"
            >github</a
          >
        </p>
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
        <v-btn dark @click="$router.push({ name: 'FirstGame' })"
          >Aller au jeux 1</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({}),
};
</script>
