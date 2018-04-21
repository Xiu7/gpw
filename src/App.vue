<template>
  <div id="app">
    <Layout>
        <Header>
          <div class="header_left">
            <div class="monitor_logo"></div>
          </div>
        </Header>
        <Layout>
            <Sider hide-trigger class="layout_silder">
              <Menu  active-name="1-2" :open-names="['1']" style="width:260px;" 
              @on-select="handleMenuChange">
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
                    <MenuItem name="2-1">监测点1</MenuItem>
                    <MenuItem name="2-2">监测点2</MenuItem>
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
      switch (name) {
          case '1-1':
              this.$router.push("/index-project");
              break;
          case '1-2':
              this.$router.push("/index-process");
              break;
      }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header_left{
  float:left;
  width:300px;
  height:64px;
}
.monitor_logo{
  width:48px;height: 48px;margin-top:6px;
  background: url('./assets/img/logo.png');
  background-size:48px 48px; 
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
</style>
