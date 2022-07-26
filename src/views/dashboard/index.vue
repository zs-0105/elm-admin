<template>
  <div class='container'>
    <h1 class="header">数据统计</h1>
    <el-row>
      <div class="data_wrap">
        <div class="data_num_head">当日数据</div>
        <div class="data_item"><span class="num">{{ userCount }}</span>新增用户</div>
        <div class="data_item"><span class="num">{{ orderCount }}</span>新增订单</div>
        <div class="data_item"><span class="num">{{ adminCount }}</span>新增管理员</div>
      </div>
    </el-row>
    <el-row>
      <div class="data_wrap">
        <div class="data_num_head bgc_b">总数据</div>
        <div class="data_item"><span class="num">{{ allUser }}</span>注册用户</div>
        <div class="data_item"><span class="num">{{ allOrder }}</span>订单</div>
        <div class="data_item"><span class="num">{{ allAdmin }}</span>管理员</div>
      </div>
    </el-row>
    <div id="chart_wrap" style="width:1200px;height:450px">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import dtime from 'time-formater'
import { userCount, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount } from '@/api/static.js'
import user from '../../../mock/user'
export default {
  components: {},
  data() {
    return {
      weekList: [],
      sevenDate: [],
      userCount: 0,
      orderCount: 0,
      adminCount: 0,
      allUser: 0,
      allOrder: 0,
      allAdmin: 0,
    }
  },
  methods: {
    getWeek() {
      for (let i = 6; i > -1; i--) {
        const d = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD')
        this.weekList.push(d)
      }
    },
    initData() {
      const today = dtime(new Date()).format('YYYY-MM-DD')
      Promise.all([userCount(today), orderCount(today), adminDayCount(today), getUserCount(), getOrderCount(), adminCount()]).then((res) => {
        this.userCount = res[0].count
        this.orderCount = res[1].count
        this.adminDayCount = res[2].count
        this.allUser = res[3].count
        this.allOrder = res[4].count
        this.allAdmin = res[5].count
      }).catch(err => {
        console.log(err);
      })
    },
    getWeekData() {
      const apiArr = [[], [], []]
      this.weekList.forEach(item => {
        apiArr[0].push(userCount(item))
        apiArr[1].push(orderCount(item))
        apiArr[2].push(adminDayCount(item))
      })
      const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]]
      Promise.all(promiseArr).then(res => {
        const resArr = [[], [], []];
        res.forEach((item, index) => {
          if (item.status == 1) {
            resArr[Math.floor(index / 7)].push(item.count)
          }
        })
        this.sevenDate = resArr;
        this.initChart()
      }).catch(err => {
        console.log(err)
      })
    },
    initChart() {
      var myChart = echarts.init(document.getElementById('chart_wrap'));
      const option = {
        title: {
          text: '走势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.weekList
        },
        yAxis: {
          type: 'value',
          name: '用户数',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '新注册用户',
            type: 'line',
            data: this.sevenDate[0],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '新增订单',
            type: 'line',
            data: this.sevenDate[1],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '新增管理员',
            type: 'line',
            data: this.sevenDate[2],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
        ]
      }
      myChart.setOption(option)
    }
  },
  created() {

  },
  mounted() {
    this.getWeek()
    this.initData()
    this.getWeekData()
  }
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入公共css类 */
.header {
  text-align: center;
  font-family: Microsoft Yahei, sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
}

.data_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  .bgc_b {
    background-color: #54A5E8;
  }
}

.data_num_head {
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  font-size: 20px;
  color: aliceblue;
  font-weight: 300;
  padding: 5px;
  background-color: #FF9800;
  border-radius: 10px;
  margin-right: 10px;
  text-align: center;
}

.data_item {
  padding: 5px;
  font-size: 15px;
  font-weight: 250;
  margin: 0 15px;
  background-color: #E5E9F2;
  border-radius: 10px;
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;

  .num {
    font-size: 20px;
    font-weight: 500;
    padding: 0 5px;
  }
}

#chart_wrap {
  margin: 0 auto;
  margin-top: 50px;
}
</style>