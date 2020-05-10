<template>
  <div class="container">
    <div class="headbox">
      <div class="my-chart" ref="myChart"></div>
      <div class="jindubox">
        <div>
          <div>月访问数</div>
          <div>同上期增长</div>
          <div><el-progress :text-inside="true" :stroke-width="24" :percentage="30" status="success"></el-progress></div>
        </div>
        <div>
          <div>月下载数</div>
          <div>同上期增长</div>
          <div><el-progress :text-inside="true" :stroke-width="24" :percentage="20" status="success"></el-progress></div>
        </div>
        <div>
          <div>月收入</div>
          <div>同上期增长</div>
          <div><el-progress :text-inside="true" :stroke-width="24" :percentage="25" status="success"></el-progress></div>
        </div>
      </div>
    </div>
    <div class="bodybox">
      <div class="bodyleft"></div>
      <div class="bodyright">
        <div class="right-top">
          <div class="right-top1"></div>
          <div class="right-top2">
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
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>

          </div>
        </div>
        <div class="right-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    props: {},
    methods:{
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      intecharts(){
        var myChart = this.$echarts.init(this.$refs.myChart)
        var option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['访问量', '下载量', '平均访问量']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '访问量',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230]
            },
            {
              name: '下载量',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 99]
            },
            {
              name: '平均访问量',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410, 132, 101, 134, 90, 230]
            },
          ]
        };
        myChart.setOption(option);
      }
    },
    mounted(){
      this.intecharts()
    },
    created(){
    },
  }
</script>

<style scoped lang="less">
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
     .headbox{
       width: 100%;
       height: 400px;
       display: flex;
       justify-content: space-between;
       background-color: white;
       margin: 20px;
       .my-chart{
         width: 800px;
         height: 400px;
       }
       .jindubox{
         width: 600px;
         height: 400px;
         display: flex;
         flex-direction: column;
         line-height: 50px;
         margin-right: 50px;
       }
     }
    .bodybox{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .bodyleft{
        width: 30%;
        height: 800px;
        background-color: #795da3;
        margin: 10px;
      }
      .bodyright{
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 800px;
        /*background-color:red;*/

        .right-top{
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 400px;

          /*background-color: #9a6e3a;*/
          .right-top1{
            width: 50%;
            height: 400px;
            background-color: white;
            margin: 10px;
          }
          .right-top2{
            width: 50%;
            height: 400px;
            background-color: white;
            margin: 10px;

          }
        }
        .right-bottom{
          width: 100%;
          height: 400px;
          background-color: #0077aa;
          margin: 30px 10px 10px 10px;

        }
      }
    }
  }
</style>

