<template>
  <div class="know">
    <page-title msg="关于" />
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import methods from '@/components/know/index.js'


export default {
  name: 'Know',
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
// @import '../components/about/index.scss';
</style>