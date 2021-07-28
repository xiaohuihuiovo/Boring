<template>
  <div id='info'>

  </div>
</template>

<script>
// import BaiduMap from 'vue-baidu-map'
export default {
  components: {
    // BaiduMap
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      var map = new BMap.Map("info");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.551257, 38.890002), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }));
      map.setCurrentCity("大连");
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped >
#info {
  width: 100%;
  height: 400px;
}
</style>
