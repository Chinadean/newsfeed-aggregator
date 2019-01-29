<template>
  <header class="app-header navbar">
    <b-link class="navbar-brand" to="#"></b-link>
    <ul class="navbar-nav mr-auto ml-5">
      <li class="nav-item" v-for="(source, index, key) in sources" >
        <router-link exact v-if="source.slug === ''" class="nav-link" :class="{active: isActive}" :to="source.slug">{{source.link}}</router-link>
        <router-link exact v-else class="nav-link" :class="{active: isActive}" :to="source.slug">{{source.link}}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    name: 'MyEWallet',
    data: function () {
      return {
        isActive: false
      }
    },
    computed: {
      sources () {
        return [
          {
            link: 'Recent News',
            slug: '/'
          },
          {
            link: 'Al Jazeera',
            slug: 'al-jazeera-english'
          },
          {
            link: 'BBC News',
            slug: 'bbc-news'
          },
          {
            link: 'Bloomberg',
            slug: 'bloomberg'
          },
          {
            link: 'Buzzfeed',
            slug: 'buzzfeed'
          },
          {
            link: 'Business Insider',
            slug: 'business-insider'
          },
          {
            link: 'CBC News',
            slug: 'cbc-news'
          },
          {
            link: 'CNN',
            slug: 'cnn'
          },
          {
            link: 'ESPN',
            slug: 'espn'
          },
          {
            link: 'Fox News',
            slug: 'fox-news'
          },
          {
            link: 'Mashable',
            slug: 'mashable'
          }
        ]
      }
    }
  }
</script>
