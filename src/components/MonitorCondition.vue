<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
        <p class="fl" style="margin-left: 8px">请选择站点:</p>
        <Select v-model="siteSelect" style="width:150px;margin-left:8px;" class="fl">
          <Option v-for="item in siteList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择监测项目:</p>
        <Select v-model="projectSelect" style="width:150px;margin-left:8px;" class="fl">
          <Option v-for="item in projectList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择日期:</p>
        <!--<DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px;margin-left:5px;"-->
        <!--v-model="dateValue"></DatePicker>-->
      <DatePicker type="date" placeholder="Select date"
                  @on-change="startDateValue=$event" style="width: 150px" v-model="startDateValue"></DatePicker>
      <DatePicker type="date" v-model="endDateValue" placeholder="Select date"
                  style="width: 150px" @on-change="endDateValue=$event"></DatePicker>
      <Button type="primary" style="margin-left:15px;" @click="searchTableData"> 查询</Button>
      </Col>
    </Row>
    <Table ref="table" style="margin-top:20px;" height="800" :columns="columnsData" :data="tableData"></Table>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
  </div>
</template>

<script>
  export default {
    name: 'MonitorCondition',
    data () {
      return {
        siteSelect: '20009',
        projectSelect:'Xairpre',
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
    methods:{
      exportData(){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      },
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
            console.log(response.length)
            this.tableData = []
            var key=Object.getOwnPropertyNames(response[0])[2]
            console.log(key)
            for(let i=0;i<response.length;i++){
               let data={Xid:null,Xdate:null,value:null}
               data.Xid= response[i].Xid
               data.Xdate= response[i].Xdate
               data.value= response[i][key]

              this.tableData.push(data)
            }
            console.log(this.tableData)
          })
      }
    }
  }
</script>

<style scoped>
.export-data-btn{
  margin-top:10px;
}
.ivu-table td.table-info-column{
  background-color: #2db7f5;
  color: #fff;
}
</style>
