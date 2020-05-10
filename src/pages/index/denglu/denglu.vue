<template>
<div class="container">
  <div class="denglubox">
    <div class="text1">登录后台管理系统</div>
    <div>
      <div class="demo-input-suffix">
        <el-input
          placeholder="用户名"
          prefix-icon="el-icon-phone"
          v-model="input1">
        </el-input>
      </div>
    </div>
    <div class="shurubox2">
      <div class="demo-input-suffix">
        <el-input
          placeholder="密码"
          prefix-icon="el-icon-phone"
         v-model="input2" show-password
          >
        </el-input>
      </div>
    </div>
    <div>
      <div class="demo-input-suffix">
        <el-input
          placeholder="图形验证码"
          prefix-icon="el-icon-search"
          v-model="input3">
        </el-input>
      </div>
    </div>
    <div class="pswbox">
      <div>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </div>
      <div>
        <el-link type="success" @click="toforget">忘记密码？</el-link>
      </div>
    </div>
    <div class="dengrubox">
      <el-row style="width: 100%">
      <el-button type="success" style="width: 100%" @click="touser">登入</el-button>
    </el-row>
    </div>
    <div></div>
  </div>
</div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        checked: false,
        input1: '',
        input2: '',
        input3: '',
      }
    },
    props: {},
    methods:{
      touser(){
        localStorage.setItem('username',this.input1)
        this.$router.push({path: '/home'})
      },
      toforget(){
        this.$router.push({path: '/denglu/forget'})
      }

    },
    mounted(){
    },
    created(){
    },
  }
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 920px;
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    .denglubox{
      width: 20%;
      height: 100%;
      .text1{
        text-align: center;
        font-size: 20px;
        margin: 150px 0 50px 0;
      }
      .shurubox2{
        margin: 20px 0;
      }
      .dengrubox{
        margin: 20px 0;
      }
      .pswbox{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
      }
    }
  }
</style>

