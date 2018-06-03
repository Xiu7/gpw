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
      <p class="fl" style="margin-left: 8px">请选择监测项目:</p>
      <Select v-model="projectSelect" style="width:150px;margin-left:5px;"
              @on-change="handleProjectChange(projectSelect)" class="fl">
        <Option v-for="item in projectList" :value="item.value"
                :key="item.value">{{ item.label }}
        </Option>
      </Select>
      <p class="fl" style="margin-left: 8px">请选择日期:</p>
      <DatePicker type="date" placeholder="Select date"
                  @on-change="startDateValue=$event" style="width: 150px" v-model="startDateValue"></DatePicker>
      <DatePicker type="date" v-model="endDateValue" placeholder="Select date"
                  style="width: 150px" @on-change="endDateValue=$event"></DatePicker>
      <Button type="primary" style="margin-left:15px;" @click="searchTableData"> 查询</Button>
      </Col>
    </Row>
    <div id="showChart" style="width:85%;height:600px;margin-top:20px"></div>
  </div>
</template>

<script>
  export default {
    name: 'MonitorCondition',
    data () {
      return {
        siteSelect: '20009',
        projectSelect:'Xairpre',
        monitorProject:'大气压力(/100 kpa)',
        siteList:[
          {'label':'监测点1','value':'20009'}],
        projectList:[
          {'label':'大气压力(/100 kpa)','value':'Xairpre'},
          {'label':'温度(℃)','value':'Xairtemp'},
          {'label':'二氧化碳(ppm)','value':'Xco2'},
          {'label':'一氧化碳(ppm)','value':'co'},
          {'label':'二氧化硫(ppm)','value':'so2'},
          {'label':'pm25(ug/m3)','value':'pm25'},
          {'label':'pm10(ug/m3)','value':'pm10'},
          {'label':'pm100(ug/m3)','value':'pm100'},
          {'label':'风速(m/s)','value':'ws'},
          {'label':'风向(度)','value':'wd'},
          {'label':'总辐射','value':'Xradiation'},
          {'label':'湿度(%)','value':'Xrelahumi'}
        ],
        columnsData:[{'title':'监测点ID',key:'Xid'},{'title':'检测项目值',key:'value'},
          {'title':'时间',key:'Xdate'}],
        tableData:[],
        startDateValue: null,
        endDateValue: null
      }
    },
    mounted(){
//        this.initData()
    },
    methods:{
      searchTableData(){
        let postData={
          id:this.siteSelect,
          start:this.startDateValue,
          end:this.endDateValue,
          sensor:this.projectSelect
        }
        console.log(postData)
        this.$http.post('/compare', postData).then(
          (response) => {
              console.log(response)
            var dataX=[]
            var dataY=[]
            var key=Object.getOwnPropertyNames(response[0])[2]
            for(let i=0;i*12<response.length;i++){
              let data={Xid:null,Xdate:null,value:null}
              data.Xid= response[i*12].Xid
              data.Xdate= response[i*12].Xdate
              data.value= response[i*12][key]
              this.tableData.push(data)
              dataX.push(data.Xdate)
              dataY.push(data.value)
            }
            var myChart = this.$echarts.init(document.getElementById('showChart'))
            myChart.setOption({
              title: {
                text: '检测项目：'+this.monitorProject,
              },
              xAxis: {
                type: 'category',
                data: dataX
              },
              yAxis: {
                type: 'value'
              },
              tooltip: {
                trigger: 'axis'
              },
              series: [{
                data: dataY,
                type: 'line',
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                  normal: {
                    color: '#f5222d',
                    width: 4
                  }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 3,
                    borderColor: '#ff85c0',
                    color: '#40a9ff'
                  }
                }
              }]
            })
          })
      },
      handleProjectChange(val){
          for(let i=0;i<this.projectList.length;i++){
            if(val==this.projectList[i].value){
                this.monitorProject=this.projectList[i].label
            }
          }

      }
    }
  }
</script>

<style scoped>
  .export-data-btn{
    margin-top:10px;
  }
</style>
