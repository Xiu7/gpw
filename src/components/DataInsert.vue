<template>
  <div class="data">
    <Layout>
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
        <Input v-model="formLeft.input2"></Input>
      </FormItem>
      <FormItem label="元素3">
        <Input v-model="formLeft.input3"></Input>
      </FormItem>

      <FormItem label="元素4">
        <Input v-model="formLeft.input4"></Input>
      </FormItem>
      <FormItem label="元素5">
        <Input v-model="formLeft.input5"></Input>
      </FormItem>
      <FormItem label="元素6">
        <Input v-model="formLeft.input6"></Input>
      </FormItem>
      <FormItem label="元素8">
        <Input v-model="formLeft.input7"></Input>
      </FormItem>
      <FormItem label="录入者姓名：">
        <Input v-model="formLeft.input8"></Input>
      </FormItem>
      <FormItem label="录入时间：">
        <DatePicker type="date" placeholder="Select date"
                   style="width: 325px" v-model="formLeft.startDateValue"></DatePicker>
      </FormItem>
         </Form>
        </Card>

        <div class="foot">
          <Button type="text" @click="canceldata">取消</Button>
          <Button type="primary"  @click="savedata">保存</Button>
        </div>
      </Content>
    </Layout>
    <Table ref="table" style="margin:20px;" height="500" :columns="columnsData" :data="tableData"></Table>
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
          input4: '',
          input5: '',
          input6: '',
          input7: '',
          input8: '',
          startDateValue: ''
        },
        columnsData:[{'title':'元素1',key:'Xid'},{'title':'元素1',key:'value'},
          {'title':'时间',key:'Xdate'}],
        tableData:[],
      }
    },
    methods:{
      savedata(){
        let postData={
          value1:this.formLeft.input1,
          value2:this.formLeft.input2,
          value3:this.formLeft.input3,
          value4:this.formLeft.input4,
          value5:this.formLeft.input5,
          value6:this.formLeft.input6,
          value7:this.formLeft.input7,
          name:this.formLeft.input8,
          time:this.formLeft.startDateValue
        }
        console.log(postData)


    },
      canceldata () {
        console.log(123);
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
    margin-top: 20px;
    float: right;
  }
</style>
