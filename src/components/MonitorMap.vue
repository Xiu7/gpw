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
        tradingArea: [],
        qqObject: null
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
          center: new qq.maps.LatLng(39.421856, 106.541840),
          zoom: 14,
          panControl: false,
          zoomControl: false
        })
      }).then(QQMapPlugin => {
          this.addMarkers()
      })
    },
    methods: {
      addMarkers(){
        let qq = this.qqObject
        let position1 = new qq.maps.LatLng(39.421856, 106.541840)
        let position2 = new qq.maps.LatLng(39.422989, 106.535919)
        let position3 = new qq.maps.LatLng(39.421143, 106.535959)
        let marker1 = new qq.maps.Marker({
          position: position1,
          map: this.map
        })
        let marker2 = new qq.maps.Marker({
          position: position2,
          map: this.map
        })
        let marker3 = new qq.maps.Marker({
          position: position3,
          map: this.map
        })
        qq.maps.event.addListener(marker1, 'click', function() {
            console.log("000")
        })
        qq.maps.event.addListener(marker2, 'click', function() {
          console.log("000")
        })
        qq.maps.event.addListener(marker3, 'click', function() {
          console.log("000")
        })
        this.mapPanTo(position1)
      },
      mapPanTo: function (position) {
        let map = this.map
        map.panTo(position)
      }
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
