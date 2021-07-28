<template>
  <div class="head-menucontent">
    <div class="logo">
      <!-- <img src="../../assets/images/toplogo.png" alt /> -->
    </div>
    <ul class="head-bar">
      <li v-for="(item, index) of menuList"
          :key="item.id"
          :class="{ selectedColor: selectIndex === index }"
          @click="addStyle(index)">
        <!-- @mouseenter="handleMenuItemMouseEnterOrLeave(index, true)"
        @mouseleave="handleMenuItemMouseEnterOrLeave(index, false)" -->
        <router-link :to="{ name: item.path }"
                     :class="{ current: currentMenu === item.id ? true : false }">
          <!-- <i :class="item.icon"></i> -->
          <span class="bar-name">{{ item.name }}</span>
        </router-link>
        <!-- <menu-label
          :menuChildrenList="item.children"
          :show="dropDownStateList[index]"
          v-if="item.children && item.children.length > 0"
        /> -->
      </li>
    </ul>
  </div>
</template>
<script>
// import menuLabel from '@/components/common/menuLabel.vue'

export default {
  name: 'menuBar',
  components: {
    // menuLabel
  },
  props: {
    currentMenu: Number,
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // dropDownStateList: this.dropDownStateListInit()
      selectIndex: 0,
      url: ''
    }
  },
  methods: {
    addStyle (index) {
      this.selectIndex = index;
    },
    getUrl () {
      this.url = this.menuList.path
      console.log(this.url);
    }

    // 下拉菜单状态列表初始化
    // dropDownStateListInit () {
    //   if (this.menuList && this.menuList.length > 0) {
    //     const tempArr = []
    //     const len = this.menuList.length
    //     for (let i = 0; i < len; i++) {
    //       tempArr[i] = false
    //     }
    //     return tempArr
    //   } else {
    //     return []
    //   }
  },
  // 菜单项鼠标移入、移出事件处理函数
  // handleMenuItemMouseEnterOrLeave (idx, val) {
  //   this.$set(this.dropDownStateList, idx, val)
  // }


}

</script>
<style lang="scss" scoped>
.selectedColor {
  color: #303133 !important;
  border-bottom: 3px solid #409eff;
  .bar-name {
    color: #303133;
  }
}

.head-menucontent {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;
  background-color: #fff;
  // border-bottom: 1px solid #5c5c5c;

  .logo {
    width: 280px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
  span {
    color: #909399;
  }
}

.head-menucontent .head-bar {
  display: flex;
  height: 60px;
  .bar-name:hover {
    color: #5c5c5c;
  }

  // position: relative;
}

.head-bar li {
  width: 100%;
  height: 58px;
  line-height: 58px;
  white-space: nowrap;
  font-size: 14px;
  margin-left: 40px;
}

.head-menucontent ul li {
  // width: 100%;
  // height: 58px;
  // line-height: 58px;
  // white-space: nowrap;
  // font-size: 14px;
  // margin-left: 40px;
  // flex: 1;
}

// .head-menucontent ul li:not(:last-child) {
//   padding-right: 2px;
// }
// .head-menucontent ul li:not(:last-child)::after {
//   content: " ";
//   position: absolute;
//   right: 0;
//   margin-top: 25px;
//   width: 2px;
//   height: 14px;
// }
</style>
