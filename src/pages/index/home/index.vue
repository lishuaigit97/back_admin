<template>
  <div class="container">
    <div class="liebuaomenu">
      <el-row class="tac">
      <el-col :span="12">
        <h5>后台管理系统</h5>
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
              <el-menu-item index="1-1" >网站用户</el-menu-item>
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
            <el-menu-item index="1-1" @click="toemail">邮件服务</el-menu-item>
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
    <div class="headbox">
      <div>
        <el-dropdown>
        <span class="el-dropdown-link">
         <span class="userbox">{{username}}</span>
          <i class="el-icon-arrow-down el-icon--right" style="margin-right: 15px"></i>
        </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item>
              <div @click="todenglupage">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
       </div>
    </div>
    <div class="yemianbox">
      <div class="danohangbox">
        <div class="daohangitem">
          <div class="textbox1">id</div>
          <div >
            <el-input placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="daohangitem">
          <div class="textbox1">用户名</div>
          <div>
            <input placeholder="请输入"/>
          </div>
        </div>
        <div class="daohangitem">
          <div class="textbox1">邮箱</div>
          <div>
            <input placeholder="请输入"/>
          </div>
        </div>
        <div class="daohangitem">
          <div class="textbox1">性别</div>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="iconbox">
            <div class="iconfont icon-search"></div>
          </div>
        </div>
      </div>
      <div class="slectbox">
        <div style="margin: 0 10px"> <el-button type="success">删除</el-button></div>
        <div> <el-button type="success">添加</el-button></div>
      </div>
      <div class="tablebox">

        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="ID"
            width="120">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column><el-table-column
            prop="tle"
            label="手机"
            show-overflow-tooltip>
          </el-table-column><el-table-column
            prop="email"
            label="邮箱"
            show-overflow-tooltip>
          </el-table-column><el-table-column
            prop="sex"
            label="性别"
            show-overflow-tooltip></el-table-column><el-table-column
            prop="ip"
            label="IP"
            show-overflow-tooltip></el-table-column><el-table-column
            prop="time"
            label="加入时间"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <span class="demonstration"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
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
        username:'',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },{
          id: '001',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tle:"12345678901",
          email:"1111@qq.com",
          sex:"男",
          ip:'1111',
          time:"20150809"
        },
          ]
      }
    },
    props: {},
    methods:{
      todenglupage(){
        console.log("222")
        this.$router.push({path: '/denglu'})
      },
      topage2(){
        this.$router.push({path: '/page2'})
      },
      toemail(){
        this.$router.push({path: '/email'})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
    created() {
      this.username=localStorage.username
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color:#F2F2F2;
    .liebuaomenu{
      width: 20%;
    }
    .headbox{
      width: 80%;
      height: 40px;
      position: fixed;
      top: 0px;
      right: 0px;
      background-color: white;
      text-align: right;
      margin: 0 10px;
      .userbox{
      line-height: 40px;
        margin-right: 20px;
      }
      .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
    .yemianbox{
      width: 80%;
      background-color: white;
      margin: 50px 10px;
    }
    .slectbox{
      display: flex;
      justify-content: flex-start;
      margin: 10px;
    }
    .danohangbox{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
      border-bottom: 1px solid #999999;
      padding-bottom: 30px;
      .daohangitem{
        display: flex;
        justify-content: center;
        .textbox1{
          font-size: 15px;
          margin: 0 10px;
          line-height: 40px;
          height: 40px;
        }
        input{
          outline: none;
          height: 30px;
          padding: 2px 5px;
        }
        .iconbox{
          background-color:rgb(0,150,136) ;
          width: 60px;
          height: 40px;
          text-align: center;
          margin-left: 10px;
          .iconfont{
            color: white;
            font-size: 20px;
            height:40px;
            line-height: 40px;
          }
        }

      }
    }
  }

</style>
<style>
  .el-menu{
    width: 350px;

  }
</style>
