<template>
  <div>
    <Layout :style="{padding: '10px 32px'}">
      <Breadcrumb :style="{margin: '12px -22px'}">
      <BreadcrumbItem>设备信息</BreadcrumbItem>
       </Breadcrumb>
  <Table ref="table" size="large" style="margin:20px;" text-align="center" border stripe :columns="columns1" :data="data2"></Table>
  <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
    </Layout>
</div>
</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '序号',
            key: 'num'
          },
          {
            title: '地区',
            key: 'local'
          },
          {
            title: '设备ID',
            key: 'id'
          },
          {
            title: '设备名称',
            key: 'name'
          },
          {
            title: '地理位置',
            key: 'position'
          },

          {
            title: '查看',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '详情')
              ]);
            }}
        ],
        data2: [
          {
            num: '1',
            local: '乌海市',
            id: '20009',
            name:'采集器',
            position: '39.708656,106.905513',
          },
          {
            num: '2',
            local: '乌海市',
            id: '200010',
            name:'采集器',
            position: '39.706576, 106.910126'
          },
          {
            num: '3',
            local: '乌海市',
            id: '200011',
            name:'采集器',
            position: '39.703835, 106.904247'
          },
          {
            num: '4',
            local: '北京市',
            id: '200012',
            name:'采集器',
            position: '39.708656,106.905513'
          },
          {
            num: '5',
            local: '北京市',
            id: '200013',
            name:'采集器',
            position: '39.708656,106.905513'
          },
          {
            num: '6',
            local: '北京市',
            id: '200014',
            name:'采集器',
            position: '39.708656,106.905513'
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '设备管理',
          content:'序号:'+this.data2[index].num+'<br>'+'地区：'+this.data2[index].local+'<br>'+'设备名称：'+this.data2[index].id+'<br>'+'地理位置：'+this.data2[index].position
        })
      },
      exportData(){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      },
    }
  }
</script>
<style scoped>
  div{
    text-align: left;
    margin: 10px;
  }
  .ivu-table .demo-table-info-row td{
    background-color: #2db7f5;
    color: #fff;
  }
  .export-data-btn{
      margin-left: 20px;
    width: 100px;
  }
</style>
