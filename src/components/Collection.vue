<template>
  <main>
    <article id="maple-road" class="">
      <collection-header :collection-title="collection.title" :collection-description="collection.description" :background-image="collection.heroImage"></collection-header>
      <section class="storage-options">
        <h3>{{ collection.storageOptionsTitle }}</h3>
        <div class="">
          <div v-for="" class="">

          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
// import axios from 'axios';
import CollectionHeader from '@/components/CollectionHeader';
import data from '../../data/data.json';

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
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
