<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
        <p class="fl">请选择站点:</p>
        <Select v-model="siteSelect" style="width:200px;margin-left:5px;" class="fl">
          <Option v-for="item in siteList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择监测项目:</p>
        <Select v-model="projectSelect" style="width:200px;margin-left:5px;" class="fl">
          <Option v-for="item in projectList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择日期:</p>
        <DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px;margin-left:5px;"></DatePicker>
      <Button type="primary" style="margin-left:15px;"> 查询</Button>
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
        siteSelect: '1',
        projectSelect:'1',
        siteList:[
            {'label':'北京','value':'1'},
            {'label':'天津','value':'2'}],
        projectList:[
            {'label':'气象信息','value':'1'},
            {'label':'粉尘信息','value':'2'},
            {'label':'气体信息','value':'3'}
        ],
        columnsData:[{'title':'日期'},{'title':'天气'},
          {'title':'温度'}],
        tableData:[]
      }
    },
    methods:{
      exportData(){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      }
    }
  }
</script>

<style scoped>
.export-data-btn{
  margin-top:10px;
}
</style>
