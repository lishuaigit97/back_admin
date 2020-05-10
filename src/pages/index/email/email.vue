<template>
    <div class="container">
      <div class="liebuaomenu">
        <el-row class="tac">
          <el-col :span="12">
            <h5>自定义颜色</h5>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">网站用户</template>
                  <el-menu-item index="1-1" @click="touser">网站用户</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">设置</span>
              </el-menu-item>
              <el-menu-item-group>
                <template slot="title">设置</template>
                <el-menu-item index="1-1">邮件服务</el-menu-item>
                <el-menu-item index="1-2">基本资料</el-menu-item>
              </el-menu-item-group>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">授权</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title" @click="topage2">主页二</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="yemianbox">
        <div class="danohangbox">
          邮件服务
        </div>
        <div class="emailbox">
          <div  class="emailitem">
            <div class="textbox2">我的角色</div>
            <div class="itemval">
              <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="emailitem">
            <div class="textbox2">SMTP服务器</div>
            <div class="itemval"><el-input v-model="input1" placeholder="smtp.aliyun.com"></el-input></div>
          </div>
          <div  class="emailitem">
            <div class="textbox2">SMTP端口号</div>
            <div class="itemval"><el-input v-model="input2" placeholder="25"></el-input></div>
          </div>
          <div  class="emailitem">
            <div class="textbox2">发件人邮箱</div>
            <div class="itemval"><el-input v-model="input3" placeholder="xianxin@layui-inc.com"></el-input></div>
          </div>
          <div  class="emailitem">
            <div class="textbox2">发件人昵称</div>
            <div class="itemval"><el-input v-model="input4" placeholder="贤心"></el-input></div>
          </div>
          <div  class="emailitem">
            <div class="textbox2">邮箱登入密码</div>
            <div class="itemval"><el-input placeholder="请输入密码" v-model="input5" show-password></el-input></div>
          </div>

          <div  class="emailitem">
            <div class="textbox2">性别</div>
            <div class="itemval">
              <el-radio v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </div>
          </div>
          <div  class="emailitem">
            <div class="textbox2">头像</div>
            <div style="margin-right: 10px"><el-input placeholder="请输入密码" v-model="input5" show-password></el-input></div>
            <div style="display: flex;">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              </el-upload>
            </div>
          </div>
          <div  class="emailitem">
            <div class="textbox2"></div>
            <div class="itemval" style="display: flex"><el-button type="primary">确认保存</el-button></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        fileList: [],
        radio: '1',
        options: [{
          value: '选项1',
          label: '超级管理员'
        }, {
          value: '选项2',
          label: '普通管理员'
        }, {
          value: '选项3',
          label: '审核员'
        }, {
          value: '选项4',
          label: '编辑人员'
        }],
        value: '',
        input1: '',input2: '',input3: '',input4: '',input5: '',
      }
    },
    props: {},
    methods:{
      topage2(){
        this.$router.push({path: '/page2'})
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      touser(){
        this.$router.push({path: '/home'})
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    .liebuaomenu {
      width: 20%;
    }
    .yemianbox {
      width: 100%;
      background-color: white;
      margin: 10px;
    }
    .danohangbox {
      width: 100%;
      margin: 20px 0;
      border-bottom: 1px solid #999999;
      padding: 30px;
      box-sizing: border-box;

      }
    .emailbox{
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-left: 5%;
      line-height: 40px;
      text-align: center;
      .emailitem{
        display: flex;
        margin: 10px;
        .textbox2{
          width: 100px;
          text-align: right;
          margin-right: 10px;
        }
        .itemval{
          width: 200px;
        }
      }
    }
    }
</style>
<style>
  .el-menu{
    width: 320px;
  }
</style>
