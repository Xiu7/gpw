<template>
  <div id="app">
    <Layout>
        <Header>
          <div class="header_left">
            <div class="monitor_logo"></div>
            <div class="project_title">西北干旱荒漠区煤炭基地生态安全保障技术平台</div>
          </div>
          <div class="header_right">

            <span class="welcome_you" style="width:50px;">欢迎您</span>
            <p class="welcome_you">孙晓丹迎您您</p>
            <Icon type="ios-gear-outline fl make_icon"></Icon>
            <p class="welcome_you log_out">[退出]</p>
          </div>
        </Header>
        <Layout>
            <Sider hide-trigger class="layout_silder">
              <Menu  active-name="1-2" :open-names="['1']" style="width:260px;"
              @on-select="handleMenuChange"
                     @on-open-change="handleSubMenuChange">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        首页
                    </template>
                    <MenuItem name="1-1">项目简介</MenuItem>
                    <MenuItem name="1-2">科研进程</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        实时监控
                    </template>
                    <MenuItem name="2-1">监测地图</MenuItem>
                    <MenuItem name="2-2">监测点信息</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        查询分析
                    </template>
                        <MenuItem name="3-1">历史数据</MenuItem>
                        <MenuItem name="3-2">单站分析</MenuItem>
                        <MenuItem name="3-3">历史预警</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        官方气象
                    </template>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        数据录入
                    </template>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        预警报警
                    </template>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        智能降尘
                    </template>
                </Submenu>
            </Menu>
            </Sider>
            <Content>
              <router-view></router-view>
            </Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    handleMenuChange:function(name){
        console.log(name.toString())
      switch (name.toString()) {
          case '1-1':
              this.$router.push("/index-project");
              break;
          case '1-2':
              this.$router.push("/index-process");
              break;
          case '2-1':
            this.$router.push("/monitor-map");
            break;
          case '2-2':
            this.$router.push("/monitor-condition");
            break;
          case '3-1':
            this.$router.push("/history-show");
            break;
      }
    },
    handleSubMenuChange(name,val){
        console.log(name)
      console.log(val)
    }
  }
}
</script>

<style>
html,body{
    width:100%;
    min-width:1340px;
    font-family:'Microsoft YaHei','Hiragino Sans GB',Helvetica,Arial,'Lucida Grande',sans-serif;
    background-color: #edeef2;
    color:#333;
    font-size: 14px;
}
.fl{
  float: left
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header_left{
  float:left;
  width:520px;
  height:64px;
  line-height: 64px;
  color:#fff;
}
.monitor_logo{
  float:left;
  width:48px;height: 48px;margin-top:6px;
  background: url('./assets/img/logo.png');
  background-size:48px 48px;
}
.project_title{
  float: left;
  width:450px;
  height: 64px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
}
.header_right{
  width:224px;height: 64px;float:right;
  line-height: 64px;
  color:#fff;
}
.welcome_you{
  text-align: center;
  margin-left: 5px;
  width:60px;height: 64px;float:left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.make_icon{
  font-size: 24px;
  margin:20px 10px;
  cursor: pointer;
}
.make_icon:hover{
  color:#2d8cf0;
}
.log_out{
  cursor: pointer;
}
.log_out:hover{
  color:#2d8cf0;
}
.layout_silder{
  width:260px !important;min-width:260px !important;max-width:260px !important;
  min-height:1000px;
  background: #fff;
}
.ivu-layout-footer{
  background: #495060;
}
.main_common_box{
  width:100%;
  padding:20px 30px;
}
.content-common{
  padding: 15px 30px;
}
</style>
