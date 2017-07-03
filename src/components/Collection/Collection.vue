<template>
  <main>
    <article id="maple-road" class="">
      <collection-header :collection-title="collection.title" :collection-description="collection.description" :background-image="collection.heroImage"></collection-header>
      <storage-options :storage-options-title="collection.storageOptionsTitle" :storageOptions="collection.storageOptions"></storage-options>
    </article>
  </main>
</template>

<script>
// import axios from 'axios';
import CollectionHeader from '@/components/Collection/CollectionHeader';
import StorageOptions from '@/components/Collection/StorageOptions';
import data from '../../../data/data.json';

export default {
  data() {
    return {
      collection: {},
    };
  },
  created() {
    this.getCollection();
  },
  watch: {
    $route: 'getCollection',
  },
  methods: {
    getCollection() {
      this.collection = data[this.$route.params.collection];
    },
  },
  components: {
    'collection-header': CollectionHeader,
    'storage-options': StorageOptions,
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
