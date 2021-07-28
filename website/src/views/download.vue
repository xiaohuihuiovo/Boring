<template>
  <div class="download">
    <page-title msg="下载" />
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import methods from '@/components/download/index.js'


export default {
  name: 'download',
  components: {
    pageTitle,
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
@import '../components/download/index.scss';
</style>
