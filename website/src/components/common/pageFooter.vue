<template>
  <div class="footer"
       v-show="isShow">
    <div class="footer-content">
      <ul class="content-nav">
        <li>
          <!-- <router-link to="/know"> -->
          <p @click="goBar('/know')">走进公司</p>
          <!-- </router-link> -->
          <span>发展历程</span>
          <span>企业文化</span>
          <span>资质荣誉</span>
          <span>合作伙伴</span>
        </li>
        <li>
          <p @click="goBar('/news')">新闻资讯</p>
          <span>公司新闻</span>
          <span>行业动态</span>
        </li>
        <li>
          <p @click="goBar('/product')">产品中心</p>
          <span>介绍视频</span>
          <span>管理模式</span>
          <span>平台目标</span>
          <span>功能模块</span>
        </li>
        <li>
          <p @click="goBar('/about')">联系我们</p>
          <span>邮箱：1234567@qq.com</span>
          <span>电话：021-55802368</span>
          <span>地址：湖北省武汉市光谷金融街</span>
        </li>
      </ul>
      <!-- <img src="../../assets/images/ercode.png" alt /> -->
    </div>
    <div class="copyright">
      <span>科建版权所有</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // router: true,
      isShow: true,

    }
  },
  methods: {
    goBar (path) {
      document.documentElement.scrollTop = document.body.scrollTop = 0
      this.$router.push({ path })
      // location.reload()
      // this.$router.go(0)
    }
  },
  computed: {
    footerInfo () {
      return {
        infoList: [
          {
            id: 1,
            // name: '发展历程'
          }
        ]
      }
    }
  },
  created () {
    // const href = (window.location.href).split("/")[3]
    // console.log(href);
  }
}
</script>

<style lang="scss" scoped >
.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          cursor: pointer;
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          cursor: pointer;
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    text-align: center;
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
