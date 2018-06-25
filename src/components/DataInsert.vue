<template>
  <div class="data">
    <Layout style="width: 800px">
      <Content :style="{padding: '0 30px'}">
        <Breadcrumb :style="{margin: '20px 18px'}">
          <h2>录入信息</h2>
        </Breadcrumb>
        <Card>
         <Form :model="formLeft" label-position="right" :label-width="100">
      <FormItem label="元素1">
        <Input v-model="formLeft.input1"></Input>
      </FormItem>
      <FormItem label="元素2">
        <Input v-model="formLeft.input2" ></Input>
      </FormItem>
      <FormItem label="元素3">
        <Input v-model="formLeft.input3"></Input>
      </FormItem>

      <!--<FormItem label="元素4">-->
        <!--<Input v-model="formLeft.input4"></Input>-->
      <!--</FormItem>-->
      <!--<FormItem label="元素5">-->
        <!--<Input v-model="formLeft.input5"></Input>-->
      <!--</FormItem>-->
      <!--<FormItem label="元素6">-->
        <!--<Input v-model="formLeft.input6"></Input>-->
      <!--</FormItem>-->
      <!--<FormItem label="元素8">-->
        <!--<Input v-model="formLeft.input7"></Input>-->
      <!--</FormItem>-->
      <FormItem label="录入者姓名：">
        <Input v-model="formLeft.input8"></Input>
      </FormItem>
      <FormItem label="录入时间：">
        <DatePicker type="date" v-model="Time" placeholder="Select date"
                    style="width: 150px" @on-change="Time=$event"></DatePicker>
        <!--<Input v-model="formLeft.time"></Input>-->
      </FormItem>
         </Form>
        </Card>

        <div class="foot">
          <Button type="primary"  @click="savedata">添加</Button>
        </div>
      </Content>
    </Layout>
    <Layout>
      <Content :style="{padding: '0 30px'}">
      <Table ref="table"  height="400" :columns="columnsData" :data="tableData" disabled-hover></Table>
        <Button type="primary" size="large" style="margin-top: 20px" @click="importData()" class="import-data-btn"><Icon type="ios-download-outline"></Icon> 导入数据</Button>
      <div class="foot">
        <Button type="primary" size="large" @click="updata">上传数据</Button>
      </div>
      </Content>
    </Layout>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        formLeft: {
          input1: '',
          input2: '',
          input3: '',
          // input4: '',
          // input5: '',
          // input6: '',
          // input7: '',
          input8: '',
        },
        columnsData:[{'title':'时间',key:'time'},{'title':'元素1',key:'value1'},{'title':'元素2',key:'value2'},{'title':'元素2',key:'value3'},
          {'title':'姓名',key:'name'}, {
            title: '操作',
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
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }],
        tableData:[],
        Time:'null'
      }
    },
    methods:{
      savedata(){
        let postData={
          value1:this.formLeft.input1,
          value2:this.formLeft.input2,
          value3:this.formLeft.input3,
          // value4:this.formLeft.input4,
          // value5:this.formLeft.input5,
          // value6:this.formLeft.input6,
          // value7:this.formLeft.input7,
          name:this.formLeft.input8,
          time:this.Time

        }
        this.tableData.push(postData)
        console.log(this.Time)


    },
      updata () {
        console.log(123);
      },
      importData(){
        this.$refs.table.importData({
          filename: '原始数据'
        });
      },
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `元素1：${this.tableData[index].value1}<br>元素1：${this.tableData[index].value2}<br>元素1：${this.tableData[index].value3}<br>姓名：${this.tableData[index].name}<br>时间：${this.tableData[index].time}`
        })
      },
      remove (index) {
        this.tableData.splice(index, 1);
      }
  }}
</script>

<style scoped>
.data{
  padding-right: 20px;
  width: 100%;
  border: 1px solid #d7dde4;
  position: relative;
  border-radius: 4px;
}
h2{
  text-align: left;
  font-size: 18px;
  color: black;
}
  .foot{
    margin: 20px 0;
    float: right;
  }

</style>
