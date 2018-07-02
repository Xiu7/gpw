<template>
  <div class="bg">
    <div class="wrapper">
      <h1 style="color: white ">西北干旱荒漠区煤炭基地生态安全监测平台</h1>
      <div class="login" v-show="showLogin">
        <Form ref="formInline" label-position="left" :model="formInline" :label-width="100":rules="ruleInline">
          <Form-item prop="user" label="用户名：">
            <Input v-model="formInline.user"></Input>
          </Form-item>
          <Form-item prop="password"  label="密  码：">

            <Input v-model="formInline.password" type="password"></Input>
          </Form-item>
          <Form-item>

            <i-button  size="large"type="primary" @click.native="handleSubmit()" long>登录</i-button>
            <span style="color: white" v-on:click="ToRegister">没有账号？马上注册</span>
          </Form-item>

        </Form>
      </div>

      <div class="Register" v-show="showRegister">
        <Form ref="formInline" label-position="left" :model="formInline" :label-width="100":rules="ruleInline">
          <Form-item prop="user" label="用户名：">
            <Input v-model="formInline.user"></Input>
          </Form-item>
          <Form-item prop="password"  label="密  码：" class="f1">

            <Input v-model="formInline.password" type="password"></Input>
          </Form-item>
          <Form-item prop="password"  label="重复密码：">

            <Input v-model="formInline.repassword" type="password"></Input>
          </Form-item>

          <Form-item>
            <i-button size="large" type="primary"  @click.native="handleRegister()" long>注册</i-button>
            <span style="color: white" v-on:click="ToLogin">已有账号？马上登录</span>
          </Form-item>
        </Form>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        formInline: {
          user: '',
          password: '',
          repassword: ''
        },
        showLogin: true,
        showRegister: false,
        isLogin:false,
        ruleInline: {
          user: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          }],
          repassword: [{
            required: true,
            message: '请重复密码',
            trigger: 'blur'
          },
            {
              type: 'string',
              min: 6,
              message: '密码长度不能小于6位',
              trigger: 'blur'
            }]
        }
      }

    },

    methods: {
      handleSubmit() {
        if (this.formInline.user == '123456' && this.formInline.password == '1234567') {
          this.$Message.success('提交成功!');
          Bus.$emit('showNavigation', false);
          this.$router.push('/index-project')
          this.$emit('GoHome',this.isLogin);
          this.$root.$eventHub.$emit('login-success-event')
          console.log("----"+window.location.href)

        } else {
          this.$Message.error('请输入用户名密码!');
        }
      },
      handleReset(val) {
        console.log(val)
      },
      handleRegister(){
        if (this.formInline.user == '123456' && this.formInline.password == '1234567'&&this.formInline.repassword==this.formInline.password ) {
          this.$Message.success('提交成功!');
          this.ToLogin();
        } else if(this.formInline.user == '123456' && this.formInline.password !=this.formInline.repassword){
          this.$Message.error('请再次确认密码一致!');
        }else{
          this.$Message.error('请输入用户名或密码!');
        }
      },
      ToRegister(){
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin(){
        this.showRegister = false
        this.showLogin = true
      }
    }
  }
</script>

<style scoped>
  .bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/background.jpg");
  }
  .wrapper {
    margin: 100px auto;
    width: 500px;
    height: 360px;
    padding: 10px;
    box-shadow: 2px 2px 2px 3px #3d4047;
    position: absolute;
    right: 80px;
    top:160px;
    border-radius:5px;
    background-color: #0C1532;
    opacity: 0.7;


  }
  .wrapper > h1{
    text-align: center;
    vertical-align: middle;
    margin: 20px 12px;
    font-size: 30px;
  }
  .login {
    margin: 0 auto;
    padding: 200px auto;
    width: 70%;
    height: 100%;
  }
  .Register {
    margin: 0 auto;
    padding: 200px auto;
    width: 70%;
    height: 100%;
  }
  label{
    color: white;
  }
  span{cursor:pointer;}
</style>


