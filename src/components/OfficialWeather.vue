<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
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
    name: "official-weather",
    data () {
      return {
        columnsData:[{'title':'区号',key:'wep_Now'},{'title':'风力（级）',key:'windpower'},{'title':'时间',key:'recordDate'},
          {'title':'温度（℃）',key:'tem'},{'title':'气压（/百帕）',key:'pre'},{'title':'相对湿度（%）',key:'rhu'},
          {'title':'两分钟平均风向（度）',key:'win_D_Avg_2mi'},{'title':'最大风速风向（度）',key:'win_D_S_Max'},{'title':'极大风速风向（度）',key:'win_D_INST_Max'},
          {'title':'极大风速（m/s）',key:'win_S_Inst_Max'},{'title':'两分钟平均风速（m/s）',key:'win_S_Avg_2mi'},{'title':'过去一小时降水量（mm）',key:'pre_1h'},
          {'title':'水平能见度',key:'vis'},{'title':'天气',key:'wep_Now'}
        ],
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
          start:this.startDateValue,
          end:this.endDateValue,
        }
        console.log(postData)
        this.$http.post('/compare', postData).then(
          (response) => {
            console.log(response.length)
            this.tableData = []
            // var key=Object.getOwnPropertyNames(response[0])[2]
            // console.log(key)
            for(let i=0;i<response.length;i++){
              let data={windpower:null,recordDate:null,tem:null,pre:null,rhu:null,win_D_Avg_2mi:null,win_D_S_Max:null,win_D_INST_Max:null,win_S_Inst_Max:null
              ,win_S_Avg_2mi:null,pre_1h:null,vis:null,wep_Now:null}
              data.windpower= response[i].windpower
              data.recordDate= response[i].windpower
              data.tem= response[i].tem
              data.pre= response[i].pre
              data.rhu= response[i].rhu
              data.tem= response[i].tem
              data.win_D_Avg_2mi= response[i].win_D_Avg_2mi
              data.win_D_S_Max= response[i].win_D_S_Max
              data.win_D_INST_Max= response[i].win_D_INST_Max
              data.win_S_Inst_Max= response[i].win_S_Inst_Max
              data.win_S_Avg_2mi= response[i].win_S_Avg_2mi
              data.pre_1h= response[i].pre_1h
              data.vis= response[i].vis
              data.wep_Now= response[i].wep_Now

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
</style>
