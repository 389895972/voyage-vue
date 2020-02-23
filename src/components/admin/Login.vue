<template>
    <div id="particles-js">
        <div class="login">
            <div class="login-top">
                管理用户登录
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="../../assets/images/admin/name.png"/></div>
                <div class="login-center-input">
                    <input type="text" name="" value="" placeholder="username" onfocus="this.placeholder=''" onblur="this.placeholder='username'"/>
                    <div class="login-center-input-text">username</div>
                </div>
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="../../assets/images/admin/password.png"/></div>
                <div class="login-center-input">
                    <input type="password" name="" :value="password" placeholder="password" onfocus="this.placeholder=''" onblur="this.placeholder='password'"/>
                    <div class="login-center-input-text">password</div>
                </div>
            </div>
            <div class="login-button">
                登录
            </div>
        </div>
        <div class="sk-rotating-plane"></div>
    </div>
</template>

<script>
  export default{
      data(){
        return{
            password:"",
            username:""
        }
      },
      methods:{
          login(){
              this.$http.post('/admin/login',{username:this.username,password:this.password})
                  .then(function (res) {
                      if(res.status==200){
                          if(res.data.confirm==true){
                              this.$router.push({path: "orderList"});
                          }
                          else{
                              this.$message({
                                  message: '账号密码错误',
                                  type: 'warning'
                              });
                          }

                      }
                  })
                  .catch(function (error) {
                      window.console.log(error)
                      alert("登陆失败")
                  })

          }
      },

  }
</script>

<style scoped>
  @import '../../assets/css/reset.css';
  @import '../../assets/css/style.css';
</style>
