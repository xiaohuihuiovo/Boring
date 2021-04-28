<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="danger" @click="goBefore">返回</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    goBefore () {
      // this.$router.push({ path: '/home' })
      this.$router.go(-1)
    }
  }
};
</script>
