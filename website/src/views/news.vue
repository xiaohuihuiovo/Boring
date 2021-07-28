<template>
  <div class="news">
    <div class="importance-events">
      <el-row type="flex"
              justify="center">
        <el-col class="events-content"
                v-if="showBanner">
          <el-col :xs="24"
                  :sm="24"
                  :md="13"
                  :lg="13"
                  :xl="13">
            <transition name="el-zoom-in-center">
              <div class="events-left"
                   v-if="newsDetail">
                <h2>官网大事记</h2>
                <h4 class="title">{{bannerDatas[index].title }} </h4>
                <div class="banner-img">
                  <img :src="$api.imgROOT + bannerDatas[index].thumbnail">
                </div>
              </div>
              <!-- <div v-else>暂无数据</div> -->
            </transition>
          </el-col>

          <el-col :xs="10"
                  :sm="10"
                  :md="11"
                  :lg="11"
                  :xl="11"
                  class="hidden-sm-and-down">
            <div class="events-right ">
              <div class="right-box">
                <div class="event-name"
                     @mouseenter="handleEnter"
                     @mouseleave="handleLeaver">
                  <div class="content"
                       :class="index === i ? 'ischecked' : ''"
                       v-for="(item,i) in bannerDatas"
                       :key="i"
                       @click="checkTitle(i)">
                    <div class="circle"></div>
                    <span class="event-data">
                      {{formatter(item.published_time)}}
                    </span>
                    <span class="title">
                      {{item.title}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-col>
      </el-row>

      <el-row type="flex"
              justify="center"
              class="news-container">
        <el-row :gutter="10"
                class="news-detail"
                v-for="(item,i) in datas "
                :key="i">
          <el-col class="detail-box">
            <el-col class="img-box">
              <el-col :xs="12"
                      :sm="12"
                      :md="7"
                      :lg="7"
                      :xl="7"
                      class="img hidden-lg-and-down">
                <img :src="$api.imgROOT + item.thumbnail">
              </el-col>
            </el-col>
            <el-col :xs="12"
                    :sm="12"
                    :md="7"
                    :lg="7"
                    :xl="7"
                    class="contents">
              <h2>{{item.title}}</h2>
              <div class="data ">
                <el-icon class="el-icon-date"></el-icon>
                {{item.published_time}}
              </div>
              <div class="news-content">{{item.summary}}</div>
              <div class="readall">{{readall}}</div>
            </el-col>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
import methods from '../components/news/index'
export default {
  data () {
    return {
      showBanner: true,
      newsDetail: true,
      index: 0,
      timer: null,
      readall: '阅读全文 >',
      bannerDatas: [{
        published_time: "",
        summary: "",
        thumbnail: "",
        title: ""
      }],

      // bannerDatas: [{
      //   title: '撒大大',
      //   summary: '',
      //   thumbnail: '',
      //   published_time: '2018-12-11'
      // }, {
      //   title: '打啊打',
      //   summary: '',
      //   thumbnail: '',
      //   published_time: '2021-12-11'
      // }, {
      //   title: '萨达',
      //   summary: '',
      //   thumbnail: '',
      //   published_time: '2021-12-11'
      // }, {
      //   title: '佳世达',
      //   summary: '',
      //   thumbnail: '',
      //   published_time: '2021-12-11'
      // }],
      datas: []
    }
  },
  methods: {
    ...methods
  },
  created () {
    this.query()
    this.queryImportant()
  }
}
</script>

<style lang="scss" scoped >
@import '../components/news/index.scss';
</style>
