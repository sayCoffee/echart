<template>
  <div class="day">
    <div class="day-time">
      <i class="el-icon-caret-left"></i>
      <span>2018年10月</span>
      <i class="el-icon-caret-right"></i>
    </div>
    <div class="day-nav">
      <ul>
        <li 
          v-for="(item, index) in num" 
          :key="index">{{ item.text }}</li>
      </ul>
    </div>
    <div class="day-data">
      <div 
        v-for="(item, index) in dayList"
        :key="index"
        class="day-list">
        <span :style="{ top: `${item.day === 28 ? 0 : 10}px`}" class="num1" >{{ item.month }}</span>
        <ul>
          <li 
            v-for="(v, key) in item.week" 
            :key="key">
          </li>
          <li 
            v-for="(v, key) in item.day" 
            :key="`${item.month}_${key}`"
            :style="{ height: `${dayHeight}px`, lineHeight: `${dayHeight - 20}px` }"
            :class="{ start: startTime.join('') === `${item.year}${formatDay(item.month)}${formatDay(v)}`, end: endTime.join('') === `${item.year}${formatDay(item.month)}${formatDay(v)}`, active: (startTime.join('') < `${item.year}${formatDay(item.month)}${formatDay(v)}` && endTime.join('') > `${item.year}${formatDay(item.month)}${formatDay(v)}`) }"
            @click="getDay(item.year, formatDay(item.month), formatDay(v))">
            <div class="day-start">起初</div>
            <div class="day-end">结束</div>
            <p>{{ v }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import selectList from '../components/selectList';
  export default {
    components: {
      selectList,
    },
    data() {
      return {
        num: [
          {
            text: '日',
          },
          {
            text: '一',
          },
          {
            text: '二',
          },
          {
            text: '三',
          },
          {
            text: '四',
          },
          {
            text: '五',
          },
          {
            text: '六',
          }
        ],
        dayHeight: 30,
        dayList: null,
        startTime: [],
        endTime: [],
      }
    },
    mounted() {
      this.getDayWidth();
      this.getDate();
    },
    methods: {
      getDayWidth() {
        const { clientWidth } = document.body;
        this.dayHeight = (clientWidth - 25) / 7;
        // const clientWidth = document.body.clientWidth;
        console.log(document.body.clientWidth);
      },
      getDate() {
        const _year = [2019, 2020];
        const _dayList = [];
        for (let index = 0; index < _year.length; index++) {
          const year = _year[index];
          for (let key = 1; key < 13; key++) {
            const day = this.getMonthDays(year, key);
            _dayList.push({
              year, 
              month: key,
              day,
              week: new Date(`${year}-${key}-01`).getDay()
            });
          }
        }
        this.dayList = _dayList;
        console.log(_dayList);
      },
      getMonthDays(year, month){
        var thisDate = new Date(year, month, 0); // 当天数为0 js自动处理为上一月的最后一天
        return thisDate.getDate();
      },
      formatDay(v) {
        return v < 10 ? `0${v}` : `${v}`;
      },
      getDay(year, month, day) {
        const { startTime, endTime } = this;
        const _star = startTime.join('');
        const _end = `${year}${month}${day}`;
        if (!startTime.length) {
          this.startTime = [year, month, day];
        } else if (_star < _end) {
          this.endTime = [year, month, day];
        } else if (_star > _end) {
          this.endTime = startTime;
          this.startTime = [year, month, day];
        } else if (_star === _end) {
          this.startTime = [];
          this.endTime = [];
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .day {
    height: 100%;
    overflow: hidden;
    .day-time {
      padding: 16px 16px 17px 16px;
      background-color: #fafafc;
      font-size: 17px;
      color: #000000;
      .el-icon-caret-left {
        float: left;
      }
      .el-icon-caret-right {
        float: right;
      }
    }
    .day-nav {
      background-color: #f7f7f7;
      padding: 9px 12.5px;
      box-shadow: 0px 7px 10px 0px	rgba(89, 89, 89, 0.1);
      ul {
        overflow: hidden;
        li {
          float: left;
          font-size: 14px;
          color: #000000;
          width: 14.2%;
          &:nth-child(1) {
            color: #f57300;
          }
          &:last-child {
            color: #f57300; 
          }
        }
      }
    }
    .day-data {
      height: calc(100% - 92px);
      background-color: #ffffff;
      overflow-y: auto;
      .day-list {
        padding: 21px 12.5px;
        box-shadow: 0px 1px 0px 0px	#eeeeee;
        font-size: 15px;
        color: #000000;
        position: relative;
        ul {
          overflow: hidden;
          position: relative;
          z-index: 2;
          li {
            float: left;
            padding: 15px 10px 5px;
            width: 14.2%;
            line-height: 30px;
            text-align: center;
            box-sizing: border-box;
            position: relative;
            p {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              transition: all 300ms;
              background-color: transparent;
            }
            .day-start,
            .day-end {
              opacity: 0;
              font-size: 12px;
              color: #888888;
              position: absolute;
              line-height: 12px;
              top: 10px;
              left: 0;
              right: 0;
              transition: all 300ms;
            }
            &.start {
              p {
                background-color: #ffdc1a;
              }
              .day-start {
                top: 0;
                opacity: 1;
              }
            }
            &.end {
              p {
                background-color: #ffdc1a;
              }
              .day-end {
                top: 0;
                opacity: 1;
              }
            }
            &.active {
              p {
                background-color: #ffdc1a;
                opacity: 0.3;
              }
            }
          }
        }
        .num1 {
          font-size: 225px;
          color: #ffdc1a;
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 1;
        }
      }
    }
  }
</style>