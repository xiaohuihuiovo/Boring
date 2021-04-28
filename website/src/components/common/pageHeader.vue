<template>
  <div class="daima">
    <menu-bar v-bind="menuData" />
  </div>
</template>

<script>
import menuBar from '@/components/common/menuBar.vue'

export default {
  name: 'page-header',
  components: {
    menuBar
  },
  data () {
    return {
      url: ''
    }
  },
  computed: {
    menuData () {
      return {
        currentMenu: this.currentMenu,
        menuList: [
          {
            id: 1,
            name: '首页',
            path: 'home'
          },
          {
            id: 2,
            name: '新闻资讯',
            path: 'news'
          },
          {
            id: 3,
            name: '产品中心',
            path: 'product'
          },
          {
            id: 4,
            name: '经典案例',
            path: 'classic'
          },
          {
            id: 5,
            name: '走进公司',
            path: 'know'
          },
          {
            id: 6,
            name: '下载APP',
            path: 'download'
          },
        ]
      }
    }
  },
  methods: {

  },

}
</script>

<style lang="scss" scoped >
</style>
