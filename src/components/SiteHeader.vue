<template>
  <header>
    <div class="header-image-wrapper">
      <a href="/">
        <img src="../assets/logo-top-line-only.png" alt="Artisan and Post Logo">
      </a>
    </div>
    <nav>
      <ul>
        <li v-for="link in menuLinks">
          <router-link :to="link.url">{{link.text}}</router-link>
          <ul v-if="link.children">
            <li v-for="childLink in link.children">
              <router-link :to="link.url + childLink.url">{{childLink.text}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'siteheader',
  data() {
    return {
      menuLinks: [
        {
          text: 'Collections',
          url: '/collections',
          children: [
            {
              text: 'Mapel Road',
              url: '/maple-road',
            },
          ],
        },
        {
          text: 'Financing',
          url: '/financing',
        },
        {
          text: 'Where To Buy',
          url: '/where-to-buy',
        },
        {
          text: 'Contact',
          url: '/contact',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-image-wrapper {
  background-color: #000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
