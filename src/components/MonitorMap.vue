<template>
  <div class="smart-area-home" >
    <div id="map" :style="{height: mapHeight + 'px'}"></div>
    <show-model v-if="isVisibleOne" :width="320" :height="130" :index="1"
    @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleTwo" :width="620" :height="130" :index="2"
                @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleThree" :width="920" :height="130" :index="3"
                @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
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
        isVisibleOne: false,
        isVisibleTwo: false,
        isVisibleThree: false,
        newInfoX:null,
        newInfoY:null,
        index:null,
        monitorDataOne:[{
          Xairpre:'',
          Xairtemp:'',
          Xco2:'',
          Xdate:'',
          Xid:'',
          Xradiation:'',
          Xrelahumi:'',
          co:'',
          pm10:'',
          pm25:'',
          pm100:'',
          so2:'',
          wd:'',
          ws:''
        }

        ]
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
          zoom: 15,
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
        let position1 = new qq.maps.LatLng(39.708656,106.905513)
        let position2 = new qq.maps.LatLng(39.706576, 106.910126)
        let position3 = new qq.maps.LatLng(39.703835, 106.904247)
        let marker1 = new qq.maps.Marker({
          position: position1,
          map: this.map
        })
        // var infoWinOne = new qq.maps.InfoWindow({
        //   map: this.map
        // });
        // infoWinOne.open()
        // infoWinOne.setContent('第一监测点')
        // infoWinOne.setPosition(position1)
        let marker2 = new qq.maps.Marker({
          position: position2,
          map: this.map
        })
        // var infoWinTwo = new qq.maps.InfoWindow({
        //   map: this.map
        // })
        // infoWinTwo.open()
        // infoWinTwo.setContent('第二监测点')
        // infoWinTwo.setPosition(position2)
        let marker3 = new qq.maps.Marker({
          position: position3,
          map: this.map
        })
        // var infoWinThree = new qq.maps.InfoWindow({
        //   map: this.map
        // })
        // infoWinThree.open()
        // infoWinThree.setContent('第三监测点')
        // infoWinThree.setPosition(position3)
        var pixel=null
        qq.maps.event.addListener(marker1, 'click', ()=> {
          this.isVisibleOne = true
          pixel = marker1.getProjection().fromLatLngToContainerPixel(position1)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index = 1
          this.searchPonitData()
        })
        qq.maps.event.addListener(marker2, 'click', ()=>{
          this.isVisibleTwo=true
          pixel = marker2.getProjection().fromLatLngToContainerPixel(position2)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=2
          this.searchPonitData()
        })
        qq.maps.event.addListener(marker3, 'click', ()=>{
          this.isVisibleThree=true
          pixel = marker3.getProjection().fromLatLngToContainerPixel(position3)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=3
          this.searchPonitData()
          console.log(this.newInfoY)
        })
        this.mapPanTo(position1)
      },
      mapPanTo: function (position) {
        let map = this.map
        map.panTo(position)
      },
      searchPonitData(){
          let postData={"id":"20009"}
          this.$http.post('/lastdata', postData).then(
            (response) => {
              console.log(response)
              this.monitorDataOne[0].Xairpre=response[0].Xairpre/100
              this.monitorDataOne[0].Xairtemp=response[0].Xairtemp
              this.monitorDataOne[0].Xco2=response[0].Xco2
              this.monitorDataOne[0].Xdate=response[0].Xdate
              this.monitorDataOne[0].Xid=response[0].Xid
              this.monitorDataOne[0].Xradiation=response[0].Xradiation
              this.monitorDataOne[0].Xrelahumi=response[0].Xrelahumi
              this.monitorDataOne[0].co=response[0].co
              this.monitorDataOne[0].pm10=response[0].pm10
              this.monitorDataOne[0].pm25=response[0].pm25
              this.monitorDataOne[0].pm100=response[0].pm100
              this.monitorDataOne[0].so2=response[0].so2
              this.monitorDataOne[0].wd=response[0].wd
              this.monitorDataOne[0].ws=response[0].ws
            })
      },
      handleCloseModal(index){
        if(index=='1'){
          this.isVisibleOne=false
        }
        if(index=='2'){
          this.isVisibleTwo=false
        }
        if(index=='3'){
          this.isVisibleThree=false
        }

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
