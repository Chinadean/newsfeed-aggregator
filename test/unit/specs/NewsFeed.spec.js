import Vue from 'vue'
import NewsFeed from '@/views/news/NewsFeed'
import NewsSource from '@/views/news/NewsSource'

import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import { VueSpinners } from '@saeris/vue-spinners'

const options = { name: 'lodash' }

Vue.use(BootstrapVue)
Vue.use(VueSpinners)
Vue.use(VueLodash, options)

describe('NewsFeed', () => {
  it('has a created hook', () => {
    expect(typeof NewsFeed.data).to.equal('function')
  })
  it('sets the correct default data', () => {
    expect(typeof NewsFeed.data).to.equal('function')
    const defaultData = NewsFeed.data()
    expect(defaultData.selected).to.equal('Month')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NewsFeed)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#traffic').textContent)
      .to.equal('Traffic')
  })
})

describe('NewsSource', () => {
  it('has a created hook', () => {
    expect(typeof NewsSource.data).to.equal('function')
  })
  it('sets the correct default data', () => {
    expect(typeof NewsSource.data).to.equal('function')
    const defaultData = NewsSource.data()
    expect(defaultData.selected).to.equal('Month')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NewsSource)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#traffic').textContent)
      .to.equal('Traffic')
  })
})
