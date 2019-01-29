const mutations = {
  GET_NEWS_FEED: (state) => {
    state.loading = true
  },
  SET_NEWS_FEED: (state, news) => {
    if (state.totalNewsFeed !== state.newsFeed.length) {
      state.newsFeed = state.newsFeed.concat(news)
    }
    state.loading = false
  },
  UPDATE_NEWSFEED_TOTAL: (state, total) => {
    state.totalNewsFeed = total
  },
  UPDATE_PAGENUM: (state, pageNum) => {
    state.pageNum = pageNum
  },
  CLEAR_NEWS_FEED: (state) => {
    state.newsFeed = []
  }
}

export default mutations
