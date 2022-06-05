<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <div :id="containerId" v-if="downloaded" />
        <div class="placeholder" v-else>Downloading ...</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Game",

  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: "game-container",
    };
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ "./game.js");
    this.downloaded = true;
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId);
    });
  },
  unmounted() {
    this.gameInstance.destroy(false);
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>
