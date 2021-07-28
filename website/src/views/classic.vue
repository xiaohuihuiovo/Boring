<template>
  <div class="classic">
    <page-title msg="经典案例" />
  </div>
</template>

<script>
import pageTitle from '@/components/common/commonTitle'
import methods from '@/components/classic/index.js'


export default {
  name: 'classic',
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
@import '../components/classic/index.scss';
</style>
