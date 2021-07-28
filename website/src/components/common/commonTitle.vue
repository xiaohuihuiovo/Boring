<template>
  <div class='title'>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped >
.title h1 {
  font-weight: bold;
}
</style>
