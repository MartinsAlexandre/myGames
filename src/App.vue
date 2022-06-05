<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <h3 @click="$router.push({ name: 'Home' })">Test jeux vidéo</h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
