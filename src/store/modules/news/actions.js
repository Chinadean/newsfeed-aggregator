import NewsAPI from 'newsapi'

const actions = {
  GET_NEWS_FEED: ({commit, dispatch}, data) => {
    return new Promise((resolve, reject) => {
      const news = new NewsAPI('41d2cef132244a7c917fcd8936a50472')
      const fromDate = data.fromDate
      const toDate = data.toDate
      const pageNum = data.pageNum

      if (!data.pool) {
        commit('GET_NEWS_FEED')
      }

      news.v2.topHeadlines({
        sources: 'al-jazeera-english, bbc-news, bloomberg, buzzfeed, business-insider, cbc-news, cnn, espn, fox-news, mashable',
        language: 'en',
        from: fromDate,
        to: toDate,
        sortBy: 'relevancy',
        page: pageNum
      }).then(response => {
        var newsFeed = response.articles.map(function (news) {
          return { sourceId: news.source.id, source: news.source.name, title: news.title }
        })
        commit('UPDATE_NEWSFEED_TOTAL', response.totalResults)
        commit('UPDATE_PAGENUM', pageNum)
        commit('SET_NEWS_FEED', newsFeed)

        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default actions
