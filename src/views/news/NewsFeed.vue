<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12" lg="8" offset-lg="2">
        <b-row>
          <b-col sm="12">
            <h1 class="mb-5">Recent News</h1>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="8" offset-lg="2">
      <b-card no-body>
        <b-card-body>
          <b-pagination v-if="totalRows>10" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" align="center"/>
          <div class='loader mt-5' v-if="loading">
            <BarLoader
              class="custom-class"
              :loading="loading"
              :color="'#bada55'"
              :size="200"
              :sizeUnit="'px'"
              widthUnit=200
            />
          </div>
          <b-table  v-if="!loading"
                    class="my-4"
                    stacked="sm"
                    responsive
                    hover
                    head-variant="light"
                    thead-class="hidden_header"
                    :items="newsFeed"
                    :currentPage="currentPage"
                    :per-page="perPage"
          >
            <div class="data" slot="source" slot-scope="item">
              <i class="fa-plus-circle bg-primary fa circle-icon mr-3 float-left"></i>
              <span class="title">{{item.value}}</span>
            </div>
            <div slot="title" slot-scope="item" >
              <span>{{item.value}}</span>
            </div>
          </b-table>
        </b-card-body>
      </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BarLoader } from '@saeris/vue-spinners'
import moment from 'moment'
export default {
  name: 'CurrentNews',
  components: {
    BarLoader
  },
  data: function () {
    return {
      currentPage: 1,
      perPage: 20,
      poolNewsFeed: null
    }
  },
  computed: {
    newsFeed () {
      const news = this.$store.state.news.newsFeed.map(function (news) {
        return { source: news.source, title: news.title }
      })

      return news
    },
    totalRows () {
      return this.$store.state.news.totalNewsFeed
    },
    currentPageNum () {
      return this.$store.state.news.pageNum
    },
    loading () {
      return this.$store.state.news.loading
    }
  },
  methods: {
    getNewsFeed (pageNum = 1, pool = false) {
      const data = {
        pageNum: pageNum,
        fromDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
        toDate: moment().format('YYYY-MM-DD'),
        pool: pool
      }
      this.$store.dispatch('news/GET_NEWS_FEED', data)
        .then(response => {
          const totalPage = response.totalResults / 20

          for (var page = 2; page <= Math.ceil(totalPage); page++) {
            var dataNext = {
              pageNum: page,
              fromDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
              toDate: moment().format('YYYY-MM-DD'),
              pool: pool
            }
            this.$store.dispatch('news/GET_NEWS_FEED', dataNext)
          }
          if (this.totalRows !== this.$store.state.news.totalNewsFeed) {
            this.currentPage = 1
          }
        })
    }
  },
  mounted () {
    this.getNewsFeed(1, false)
    this.poolNewsFeed = setInterval(() => {
      this.getNewsFeed(1, true)
    }, 5000)
  },
  destroyed () {
    // this.$store.commit('news/CLEAR_NEWS_FEED')
    clearInterval(this.poolNewsFeed)
  }
}
</script>
<style scoped>
  .circle-icon {
    padding: 5px !important;
    width: 10px !important;
    height: 10px !important;
    position: absolute;
    top:5px;
  }

  .fa-plus-circle:before {
    content: '' !important;
  }

  .data {
    width:30%;
    position:relative;
  }

  .data .title {
    padding-left:20px;
  }

  .loader {
    width: 200px !important;
    margin: 0 auto;
  }

  .sourceId {
    display:none !important
  }
</style>
