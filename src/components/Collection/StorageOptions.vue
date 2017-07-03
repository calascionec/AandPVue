<template>
  <section class="storage-options">
    <h3></h3>
    <div class="storage-options-container">
      <div v-for="option in storageOptions" class="storage-option">
        <img src="" alt="">
        <h4>{{ option.title }}</h4>
        <h5 v-if="option.subtitle">{{ option.subtitle }}</h5>
        <p class="dimensions">{{ option.dimensions }}</p>
      </div>
    </div>
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
    storageOptionsTitle: {
      type: String,
    },
    storageOptions: {
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
