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
    <Table ref="table" style="margin-top:20px;" height="600"  :columns="columnsData1" :data="tableData1"></Table>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
    <Table ref="table" style="margin-top:20px;" height="800"  :columns="columnsData2" :data="tableData2"></Table>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
  </div>
</template>

<script>
  import axios from'axios'
  export default {
    name: "official-weather",
    data () {
      return {
        columnsData1:[{'title':'时间',key:'recordDate'},{'title':'风力（级）',key:'windpower'},
          {'title':'温度（℃）',key:'tem'},{'title':'气压（/百帕）',key:'pre'},{'title':'相对湿度（%）',key:'rhu'},
          {'title':'两分钟平均风向（度）',key:'win_D_Avg_2mi'},{'title':'最大风速风向（度）',key:'win_D_S_Max'},
        ],
        columnsData2:[{'title':'时间',key:'recordDate'},{'title':'极大风速风向（度）',key:'win_D_INST_Max'},
          {'title':'极大风速（m/s）',key:'win_S_Inst_Max'},{'title':'两分钟平均风速（m/s）',key:'win_S_Avg_2mi'},{'title':'过去一小时降水量（mm）',key:'pre_1h'},
          {'title':'水平能见度',key:'vis'},{'title':'天气',key:'wep_Now'}
        ],
        tableData1:[],
        tableData2:[],
        startDateValue: '',
        endDateValue: ''
      }
    },
    methods:{
      exportData(){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      },
      searchTableData(){
        var start=this.startDateValue.replace(/-/ig,'');
        var end=this.endDateValue.replace(/-/ig,'');
         console.log(start);
          axios.get('http://101.200.54.155:8080/qixiang',{
            params: {
              start:start,
              end:end
            }
          })
            .then(response=>{
              this.tableData1= []
              this.tableData2= []
              console.log(response.data[0])
              for(let i=0;i<response.data.length;i++){
                let data1={windpower:null,recordDate:null,tem:null,pre:null,rhu:null,win_D_Avg_2mi:null}
                let data2={win_D_S_Max:null,win_D_INST_Max:null,win_S_Inst_Max:null,win_S_Avg_2mi:null,pre_1h:null,vis:null,wep_Now:null}
                data1.windpower= response.data[i].windpower
                data1.recordDate= response.data[i].TIME
                data1.tem= response.data[i].TEM
                data1.pre= response.data[i].PRS
                data1.rhu= response.data[i].RHU
                data1.win_D_Avg_2mi= response.data[i].WIN_D_Avg_2mi
                data1.win_D_S_Max= response.data[i].WIN_D_S_Max

                data2.recordDate= response.data[i].TIME
                data2.win_D_INST_Max= response.data[i].WIN_D_INST_Max
                data2.win_S_Inst_Max= response.data[i].WIN_S_Inst_Max
                data2.win_S_Avg_2mi= response.data[i].WIN_S_Avg_2mi
                data2.pre_1h= response.data[i].PRE_1h
                data2.vis= response.data[i].VIS
                data2.wep_Now= response.data[i].WEP_Now

                this.tableData1.push(data1)
                this.tableData2.push(data2)
              }
            })
            .catch(error=>{
              console.log(error)
            })


          // console.log(this.tableData)
        }
      }
  }
</script>

<style scoped>
  .export-data-btn{
    margin-top:10px;
  }
</style>
