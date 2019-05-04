<template>
  <div class="client">
    <div class="client-title">
      <div class="client-tol">按款式统计</div>
      <div class="count">
        <div class="count-list">
          <span>计销量</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="count-list day">
          <span>按日</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
    </div>
    <div class="sales">
      <div class="sales-title">销量统计图</div>
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
            name: '商品1',
            sale: 27
          },
          {
            name: '商品2',
            sale: 36
          },
          {
            name: '商品3',
            sale: 10
          },
          {
            name: '商品4',
            sale: 13
          },
          {
            name: '商品5',
            sale: 8
          },
        ],
        charts: '',
        opi:['商品1','商品2','商品3','商品4','商品5'],
        opidata:[27,36,10,13,8]
      }
    },
    methods:{
      drawPie(id) {
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            
              type : 'shadow'        
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
              {
                type : 'category',
                data : this.opi,
                axisTick: {
                  alignWithLabel: true
                }
              }
          ],
          yAxis : [
              {
                type : 'value'
              }
          ],
          series : [
              {
                name:'直接访问',
                type:'bar',
                barWidth: '50%',
                data:this.opidata
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
