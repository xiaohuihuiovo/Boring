<template>
  <div class='product-container'>
    <el-row type="flex"
            justify="center">
      <el-col class="main-container">
        <el-row :gutter="10">
          <el-col>
            <div class="product-list">
              <div class="product-pic">
                <img src=""
                     alt="">
              </div>
              <div class="product-text"></div>
              <div class="product-mark"></div>
            </div>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      data: []
    }
  },
  methods: {
    queryDatas (pageIndex = 1, pageSize = 6) {
      this.axios
        .get(this.$api.getProducts, {
          params: {
            pageIndex,
            pageSize
          }
        }).then(res => {
          console.log(res)
        }).catch(() => { })

    }
  },
  mounted () {
    this.queryDatas()
  }
}
</script>

<style lang="scss" scoped >
</style>
