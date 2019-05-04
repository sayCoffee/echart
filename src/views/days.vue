<template>
  <div class="client">
    <div class="client-title">
      <div class="client-tol">按日期统计</div>
      <div class="count">
        <div class="count-list">
          <span>日期</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="count-list day">
          <span>按日</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
    </div>
    <div class="sales">
      <div class="sales-title">统计趋势图</div>
      <div class="sales-content">
        <ul>
          <li v-for="(item,key) in list" :key="key">
            <span class="square"></span>
            <span class="custom">{{item.name}}</span>
            <div class="num">{{item.sale}}</div>
          </li>
        </ul>
      </div>
      <div class="map">
        <div class="map-title">
          <span class="base">基数:10</span>
          <span class="change">修改</span>
        </div>
      </div>
      <div id="main" style="width: 100%;height: 300px;"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    data() {
      return {
        list: [{
            name: '总销售额',
            sale: 27
          },
          {
            name: '总传播次数',
            sale: 36
          },
          {
            name: '传播转化率',
            sale: 10
          },
          {
            name: '访问量',
            sale: 13
          },
          {
            name: '下单量',
            sale: 8
          }
        ],
        charts: '',
        opi:['总销售额','总传播次数','传播转化率','访问量','下单量'],
        opidata:[
          {value:27, name:'总销售额'},
          {value:36, name:'总传播次数'},
          {value:10, name:'传播转化率'},
          {value:13, name:'访问量'},
          {value:8, name:'下单量'}
        ],
      }
    },
    methods:{
      drawPie(id) {
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
          tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['总销售额','总传播次数','传播转化率','访问量','下单量'],
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data: this.opidata,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
        ]
        })
      }
    },
    mounted(){
      this.$nextTick(function() {
        this.drawPie('main');
      });
    }
  }
</script>

<style lang="scss" scoped>
  .client {
    .client-title {
      background-color: #fafafc;
      .client-tol {
        font-size: 19px;
        color: #000000;
        padding-top: 16px;
        padding-bottom: 14px;
      }
      .count {
        padding: 14px 15px 13px 15px;
        overflow: hidden;
        .count-list {
          float: left;
          span {
            font-size: 14px;
            color: #000000;
            margin-right: 7px;
          }
          .el-icon-caret-bottom {
            color: #888888;
          }
        }
        .day {
          float: right;
        }
      }
    }
    .sales {
      background-color: #ffffff;
      padding-top: 18px;
      padding-left: 15px;
      margin-top: 10px;
      .sales-title {
        font-size: 17px;
        color: #000000;
        text-align: left;
        padding-bottom: 26px;
      }
      .sales-content {
        ul {
          overflow: hidden;
          li {
            float: left;
            width: 33.33%;
            text-align: left;
            padding-bottom: 27px;
            &:nth-child(2) {
              .square {
              background-color: #ffdc1a;
              }
            }
            &:nth-child(3) {
              .square {
              background-color: #ff833f;
              }
            }
            &:nth-child(4) {
              .square {
              background-color: #49b04c;
              }
            }
            &:nth-child(5) {
              .square {
              background-color: #59b7f8;
              }
            }
            .square {
              width: 8px;
              height: 8px;
              display: inline-block;
              background-color: #3273dc;
              margin-right: 5px;
            }
            .custom {
              font-size: 13px;
              color: #000000;
            }
            .num {
              font-size: 17px;
              color: #000000;
              padding-top: 10px;
            }
          }
        }
      }
      .map {
        padding-top: 18px;
        text-align: left;
        .map-title {
          padding-bottom: 18px;
          .base {
            font-size: 13px;
            color: #000000;
            padding-right: 10px;
          }
          .change {
            font-size: 12px;
            color: #1a86ff;
          }
        }
      }
    }
  }
</style>
