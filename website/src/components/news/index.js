export default {
  queryImportant (isImportant = true) {
    this.axios.get(
      this.$api.getNews, {
      params: {
        isImportant
      }
    }).then(res => {
      this.bannerDatas = res.data.data.pageDatas.slice(0, 4)
      // console.log(this.bannerDatas)
      this.slideShow()
    }).catch({})
  },
  query (pageIndex = 1, pageSize = 5) {
    this.axios.get(
      this.$api.getNews, {
      params: {
        pageIndex,
        pageSize
      }
    }).then(res => {
      this.datas = res.data.data.pageDatas
      this.datas.forEach(item => {
        if (item.summary.length > 92) {
          item.summary = item.summary.substr(0, 60) + '......'
        }
      })
      console.log(this.datas)
    }).catch(() => {

    })
  },
  slideShow () {
    window.clearInterval(this.timer)
    this.timer = window.setInterval(() => {
      this.newsDetail = !this.newsDetail
      if (this.index === this.bannerDatas.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      setTimeout(() => {
        this.newsDetail = !this.newsDetail
      }, 200)
    }, 3000)
  },
  formatter (string) {
    if (string) {
      const data = string.split('-')
      return data[0] + '-' + data[1]
    }
  },
  checkTitle (index) {
    this.newsDetail = !this.newsDetail
    this.index = index
    setTimeout(() => {
      this.newsDetail = !this.newsDetail
    }, 200)
  },
  handleEnter () {
    clearInterval(this.timer)
    this.timer = null
  },
  handleLeaver () {
    this.slideShow()
  }
}