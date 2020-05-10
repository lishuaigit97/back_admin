<template>
<div class="container">
  <div class="denglubox">
    <div class="text1">找回密码</div>
    <div>
      <div class="demo-input-suffix">
      <el-input
        placeholder="请输入注册时的手机号"
        prefix-icon="el-icon-user"
        v-model="input1">
      </el-input>
      </div>
    </div>
    <div class="shurubox1">
      <div class="demo-input-suffix" style="width: 60%">
        <el-input
          placeholder="图形验证码"
          prefix-icon="el-icon-search"
          v-model="input2">
        </el-input>
      </div>
      <div>
        <el-button>123456789</el-button>
      </div>
    </div>
    <div  class="shurubox2">
      <div class="demo-input-suffix" style="width: 60%">
        <el-input
          placeholder="短信验证码"
          prefix-icon="el-icon-search"
          v-model="input3">
        </el-input>
      </div>
      <div @click="getcode(this)">
        <el-button :disabled="iscode">{{codeval}}</el-button>
      </div>
    </div>

    <div class="dengrubox">
      <el-row style="width: 100%">
        <el-button type="success" style="width: 100%">找回密码</el-button>
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
        countdown:60,
        checked: false,
        input1: '',
        input2: '',
        input3: '',
        codeval:'获取验证码',
        iscode:false,
      }
    },
    props: {},
    methods:{
      getcode(){
        console.log(this.checkPhone(this.input1))
        if(!this.checkPhone(this.input1)){
          return false
        }
        if(!this.iscode){
         this.iscode=true
          var timer = setInterval(()=>{
            if(this.countdown==0){
              this.codeval="获取验证码"
              this.countdown=60
              clearInterval(timer)
              this.iscode=false
            }else {
              this.countdown--
              this.codeval="重新发送"+this.countdown+"s"
            }
          },1000)
        }
      },

    // getcode(){
    //   if(!this.checkPhone(this.input1)){
    //     return false
    //   }
    //   if(!this.iscode){
    //     this.iscode = true
    //     var timner = setInterval(()=>{
    //       if (this.countdown == 0) {
    //         this.codeval="获取验证码";
    //         this.countdown = 60;
    //         clearInterval(timner)
    //         this.iscode = false
    //       } else {
    //         this.countdown--;
    //         this.codeval = '重新发送'+this.countdown
    //       }
    //     },1000)
    //   }


      checkPhone(phone){
        if(!(/^1[3456789]\d{9}$/.test(phone))){
          return false;
        }else {
          return true;
        }
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
      width: 18%;
      height: 100%;
      display: flex;
      flex-direction: column;


      .text1{
        text-align: center;
        font-size: 20px;
        margin: 150px 0 50px 0;
      }
      .shurubox1{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 15px 0;

      }
      .shurubox2{
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
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

