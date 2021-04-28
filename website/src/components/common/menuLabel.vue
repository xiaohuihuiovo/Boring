<template>
  <transition>
    <div class="menu-label" v-show="show">
      <router-link :to="{name: item.path}" v-for="item of menuChildrenList" :key="item.id">{{item.name}}</router-link>
      <!-- <a :href="item.path" v-for="item of menuChildrenList" :key="item.id">{{item.name}}</a> -->
    </div>
  </transition>
</template>
<script>
export default {
  name: 'menuLabel',
  props: {
    menuChildrenList: {
      type: Array,
      default () {
        return []
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
  width: 0px !important;
  height: 0px !important;
}
.v-enter-active, .v-leave-active {
  overflow: hidden;
  transition: all .2s;
}
</style>
