<template>
  <div class="smart-area-home" >
    <div id="map" :style="{height: mapHeight + 'px'}"></div>
    <show-model v-if="isVisible" :width="newInfoX" :height="newInfoY" :index="index"
    @handleCloseModal="handleCloseModal"></show-model>
  </div>
</template>

<script>
  import { TMap } from '../common/TMap.js'
  import ShowModel from '../components/ShowModel'
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
        qqObject: null,
        isVisible: false,
        newInfoX:null,
        newInfoY:null,
        index:null
      }
    },
    components:{
      ShowModel
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
        var pixel=null
        qq.maps.event.addListener(marker1, 'click', ()=>{
          this.isVisible=true
          pixel = marker1.getProjection().fromLatLngToContainerPixel(position1)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=1
          })
        qq.maps.event.addListener(marker2, 'click', ()=>{
          this.isVisible=true
          pixel = marker2.getProjection().fromLatLngToContainerPixel(position2)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=2
        })
        qq.maps.event.addListener(marker3, 'click', ()=>{
          this.isVisible=true
          pixel = marker3.getProjection().fromLatLngToContainerPixel(position3)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=3
          console.log(this.newInfoY)
        })
        this.mapPanTo(position1)
      },
      mapPanTo: function (position) {
        let map = this.map
        map.panTo(position)
      },
      handleCloseModal(){
          console.log("false")
        this.isVisible=false
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
