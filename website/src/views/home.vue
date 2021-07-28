<template>
  <div class="home">
    <page-title msg="首页" />
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import methods from '@/components/home/index.js'


export default {
  name: 'home',
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
@import '../components/home/index.scss';
</style>
