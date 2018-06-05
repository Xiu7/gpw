<template>
  <div id="app">
    <Layout v-if="!isLogin">
        <Header>
          <div class="header_left">
            <div class="monitor_logo"></div>
            <div class="project_title">西北干旱荒漠区煤炭基地生态安全监测平台</div>
          </div>
          <div class="header_right">

            <span class="welcome_you" style="width:50px;">欢迎您</span>
            <p class="welcome_you">{{username}}</p>
            <Icon type="ios-gear-outline fl make_icon"></Icon>
            <p class="welcome_you log_out" @click="exit()">[退出]</p>
          </div>
        </Header>
        <Layout>
            <Sider hide-trigger class="layout_silder">
              <Menu  active-name="1-2" :open-names="['1']" style="width:260px;"
              @on-select="handleMenuChange"
                     @on-open-change="handleSubMenuChange">
                <MenuItem name="1">
                  <Icon type="ios-paper"></Icon>
                  首页
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="ios-paper"></Icon>
                  科研进程
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        监测站
                    </template>
                    <MenuItem name="3-1">实时监测</MenuItem>
                    <MenuItem name="3-2">历史查询</MenuItem>
                    <MenuItem name="3-3">单站分析</MenuItem>
                </Submenu>
                <MenuItem name="4">
                  <Icon type="stats-bars"></Icon>
                  官方气象
                </MenuItem>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        查询分析
                    </template>
                        <MenuItem name="5-1">历史数据</MenuItem>
                        <MenuItem name="5-2">单站分析</MenuItem>
                        <!--<MenuItem name="3-3">历史预警</MenuItem>-->
                </Submenu>

                <Submenu name="6">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        数据录入
                    </template>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        预警报警
                    </template>
                </Submenu>
            </Menu>
            </Sider>
            <Content>
              <router-view> </router-view>
            </Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
    <div v-if="isLogin">
      <router-view> </router-view>
    </div>
  </div>
</template>
<!--<Login @GoHome="goHome" @Tologin="tologin"></Login>-->
<script>
  import Login from './components/Login'
export default {
  name: 'App',
  data(){
    return{
      isLogin:true,
      username:''
    }
  },
  created(){
   if(window.location.href.indexOf('login')!=-1 || window.location.hash=='#/'){
     //console.log("----"+window.location.href)
     this.isLogin=true
     console.log("****登陆"+this.isLogin);
   }else{
     this.isLogin=false
     console.log("****首页"+this.isLogin);
   }
  },
  components:{
    Login,
  },
  methods:{
    handleMenuChange:function(name){
        console.log(name.toString())
      switch (name.toString()) {
          case '1':
              this.$router.push("/index-project");
              break;
        case '2':
          this.$router.push("/index-process");
          break;
          case '3-1':
            this.$router.push("/monitor-map");
            break;
          case '3-2':
            this.$router.push("/monitor-condition");
            break;
          case '3-3':
            this.$router.push("/history-show");
            break;
          case '4':
            this.$router.push("/official-weather");
            break;
      }
    },
    handleSubMenuChange(name,val){
        console.log(name)
      console.log(val)
    },
    exit:function () {
      this.$router.push('/login');
    },
    goHome(msg){
      this.isLogin=msg
    },
    tologin(msg){
      this.username=msg
    },
    // handleLogin(){
    //   this.isLogin=false
    //   this.$router.push('/index-project')
    // }

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
.fl{
  float: left
}
.header_left{
  float:left;
  width:550px;
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
  width:490px;
  height: 64px;
  margin-left: 10px;
  font-size: 25px;
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
