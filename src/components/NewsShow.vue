<template>
  <div class="layout">
    <Layout>
      <Content :style="{padding: '0 10px'}">
        <Breadcrumb :style="{margin: '20px 18px'}">
          <h2>主要内容</h2>
        </Breadcrumb>
        <Card>
          <div style="min-height: 500px;">
            <div class="layout-header">
              <h1>{{title}}</h1>
              <span>{{time}}</span>
            </div >
            <div class="layout-content">
              <Row>
                <Col span="8">
                <div class="layout-left">
                  <ul>
                    <li><img src="../assets/img/scene2.jpg"></li>
                  </ul>
                </div>
                </Col>
                <Col span="16">
                <div class="layout-right">
                  <p>{{content}}</p>
                  <p>{{content}}</p>
                  <p>{{content}}</p>
                </div>
                </Col>
              </Row>
            </div>

          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: "newsShow",
    data(){
      return{
        title:'创新决胜未来海外关注习近平院士大会上的讲话',
        time:'2018-05-31',
        img:'../assets/img/scene2.jpg',
        content:'2018年5月28日，中国科学院第十九次院士大会、中国工程院第十四次院士大会在北京人民大会堂隆重开幕。习近平出席会议并发表重要讲话。来源：新华社 　　' +
        '央视网消息：5月28日上午，中国科学院第十九次院士大会、中国工程院第十四次院士大会在人民大会堂开幕，习近平出席会议并发表重要讲话。'
      }
    },
    methods:{
      back:function () {
        this.$router.push('/home');
      },
      exit:function () {
        this.$router.push('/');
      }


    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .header-left{
    float:left;
    width:550px;
    height:64px;
    line-height: 64px;
    color:#fff;
    padding-left: -20px;
  }
  .project_title{
    float: left;
    width:490px;
    height: 64px;
    margin-left: 10px;
    font-size: 25px;
    font-weight: 600;
  }
  .layout-header{
    margin: 10px;
    border-bottom:solid 4px gainsboro;
  }

  .layout-content{
    margin-top: 20px;
  }
  .layout-left{
    display: block;
    float: left;
    width: 100%;
  }
  .layout-left ul li {
    list-style: none;
    margin: 10px;
    vertical-align:middle
  }
  .layout-right{
    font-size: 15px;
    text-indent:2em;
    text-align: left;
    margin-left: 20px;
  }
  .layout-right p{
    margin:10px ;
  }
  h2{
    text-align: left;
    font-size: 18px;
    color: black;
  }
</style>
