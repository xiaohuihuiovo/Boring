<template>
  <div class="know">
    <page-title msg="了解公司" />
    <baidu-map></baidu-map>
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import baiduMap from '@/components/common/baiduMap'
import methods from '@/components/know/index.js'


export default {
  name: 'Know',
  components: {
    pageTitle,
    baiduMap
  },
  data () {
    return {

    }
  },
  methods: {
    ...methods
  },
  created () {

  }
}
</script>

<style lang="scss" scoped >
@import '../components/know/index.scss';
</style>
