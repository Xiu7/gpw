<template>
  <div class="smart-area-home">
    <div id="map" :style="{height: mapHeight + 'px'}"></div>
  </div>
</template>

<script>
  import { TMap } from '../common/TMap.js'
  export default {
    name: 'HomePage',
    data () {
      return {
        mapHeight: 600,
        map: null,
        loading: true,
        loadingText: '',
        panelVisible: false,
        currentCity: null,
        areaInfo: {},
        tradingArea: []
      }
    },
    computed: {
    },
    created () {
      this.mapHeight = document.documentElement.clientHeight - 120
    },
    mounted () {
      TMap().then(qq => {
        this.qqObject = qq
        this.map = new qq.maps.Map(document.getElementById('map'), {
          // 地图的中心地理坐标
          center: new qq.maps.LatLng(39.916527, 116.397128),
          zoom: 13,
          panControl: false,
          zoomControl: false
        })
      }).then(QQMapPlugin => {

      })
    },
    methods: {

    }
  }
</script>

<style>
  .smart-area-home{
    height:100%;
    box-sizing: border-box;
    padding:20px 20px 35px 20px !important;
    background-color: #fff;
  }
</style>
