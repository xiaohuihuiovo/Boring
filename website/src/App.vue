<template>
  <div id="app">
    <div class="head">
      <page-header />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <page-footer />
    </div>
  </div>
</template>
<script>
import pageHeader from '@/components/common/pageHeader.vue'
import pageFooter from '@/components/common/pageFooter.vue'

export default {
  name: 'APP',
  components: {
    pageHeader,
    pageFooter
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

.content {
  height: 1260px;
  // height: 660px;
}
.head {
  background-color: #fff;
}
</style>
