<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
      <p class="fl">请选择站点:</p>
      <Select v-model="siteSelect" style="width:200px" class="fl">
        <Option v-for="item in siteList" :value="item.value"
                :key="item.value">{{ item.label }}
        </Option>
      </Select>
      </Col>
    </Row>
    <div id="showChart" style="width:85%;height:600px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'MonitorCondition',
    data () {
      return {
        siteSelect: '1',
        projectSelect:'1',
        siteList:[
          {'label':'北京','value':'1'},
          {'label':'天津','value':'2'}],
      }
    },
    mounted(){
        this.initData()
    },
    methods:{
      initData(){
        var myChart = this.$echarts.init(document.getElementById('showChart'))
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
              normal: {
                color: 'green',
                width: 4,
                type: 'dashed'
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
              }
            }
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .export-data-btn{
    margin-top:10px;
  }
</style>
