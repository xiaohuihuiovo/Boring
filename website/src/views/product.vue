<template>
  <div class="product">
    <page-title msg="产品" />
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import methods from '@/components/product/index.js'
export default {
  name: 'product',
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
@import '../components/product/index.scss';
</style>
