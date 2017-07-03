<template>
  <section class="colleciton-header">
    <div class="">
      <h2>{{ collectionTitle }}</h2>
    </div>
    <p v-if="collectionDescription">{{ collectionDescription }}</p>
  </section>
</template>

<script>
export default {
  name: 'siteheader',
  data() {
    return {
    };
  },
  props: {
    collectionTitle: {
      type: String,
    },
    backgroundImage: {
      type: String,
      defualt: 'text',
    },
    collectionDescription: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
