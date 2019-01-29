import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import NewsFeed from '@/views/news/NewsFeed'
import NewsSource from '@/views/news/NewsSource'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/',
      component: Full,
      children: [
        {
          path: '/',
          name: 'Recent News',
          component: NewsFeed
        },
        {
          path: 'al-jazeera-english',
          name: 'Al Jazeera',
          component: NewsSource
        },
        {
          path: 'bbc-news',
          name: 'BBC News',
          component: NewsSource
        },
        {
          path: 'bloomberg',
          name: 'Bloomberg',
          component: NewsSource
        },
        {
          path: 'buzzfeed',
          name: 'Buzzfeed',
          component: NewsSource
        },
        {
          path: 'business-insider',
          name: 'Business Insider',
          component: NewsSource
        },
        {
          path: 'cbc-news',
          name: 'CBC News',
          component: NewsSource
        },
        {
          path: 'cnn',
          name: 'CNN',
          component: NewsSource
        },
        {
          path: 'espn',
          name: 'ESPN',
          component: NewsSource
        },
        {
          path: 'fox-news',
          name: 'Fox News',
          component: NewsSource
        },
        {
          path: 'mashable',
          name: 'Mashable',
          component: NewsSource
        }
      ]
    }
  ]
})
