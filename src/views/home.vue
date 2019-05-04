<template>
  <div class="home">
    <header>数据图表</header>
    <div class="data-nav">
      <ul>
        <li 
          v-for="(item,key) in list" 
          :key="key"
          :class="{ active: variable === key }"
          @click="variable = key">{{ item.title }}</li>
      </ul>
    </div>
    <div class="opera">
      <div class="opera-title">
        <div class="opera-pht"></div>
        <div class="opera-data">运营数据</div>
      </div>
      <div class="data-content">
        <div class="data-list">
          <div class="num">5684.00</div>
          <div class="total">共计收入</div>
        </div>
        <div class="data-list">
          <div class="num">10003</div>
          <div class="total">被访问总数</div>
        </div>
        <div class="data-list">
          <div class="num">60</div>
          <div class="total">上架中商品</div>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="category">
        <div class="category-pht"></div>
        <div class="category-tol">分类统计</div>
      </div>
      <div class="kind">
        <ul>
          <router-link 
            v-for="(v, key) in statistics" 
            :key="key" 
            :to="{ path: v.to }" 
            tag="li" 
            class="kind-list" >
            <div :class="['kind-img', v.class ]"></div>
            <div class="kind-tol">{{ v.text }}</div>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="board">
      <div class="board-rank">排行榜</div>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  
  export default {
    data() {
      return {
        variable: 0,
        list: [
          {
            title: '今日',
          },
          {
            title: '近七日',
          },
          {
            title: '筛选日期',
          }
        ],
        statistics: [
          {
            class: '',
            text: '按款式统计',
            to: '/way'
          },
          {
            class: 'pht',
            text: '按用户统计',
            to: '/about'
          },
          {
            class: 'time',
            text: '按日期统计',
            to: '/day'
          },
          {
            class: 'model',
            text: '按风格统计',
            to: '/style'
          },
        ]
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    header {
      padding-top: 16px;
      padding-bottom: 14px;
      text-align: center;
      font-size: 19px;
      color: #000000;
      background-color: #ffffff;
    }
    .data-nav {
      background-image: linear-gradient(-90deg, #3272dc 0%, #53a5e1 100%);
      ul {
        padding-left: 15px;
        padding-top: 26px;
        padding-bottom: 100px;
        overflow: hidden;
        li {
          float: left;
          margin-right: 25px;
          font-size: 15px;
          color: #ffffff;
          padding-bottom: 7px;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px;
          }
          &:hover::after,&.active::after {
            background-color: #ffe139;
          }
        }
      }
    }
    .opera {
      overflow: hidden;
      margin-left: 15px;
      margin-right: 15px;
      background-color: #ffffff;
      margin-top: -74px;
      border-radius: 10px;
      .opera-title {
        padding-top: 16px;
        padding-left: 15px;
        padding-bottom: 28px;
        overflow: hidden;
        .opera-pht {
          background-image: url("../assets/images/sy.png");
          background-repeat: no-repeat;
          width: 15px;
          height: 13px;
          background-size: 100% 100%;
          float: left;
          margin-right: 7px;
          margin-top: 2px;
        }
        .opera-data {
          font-size: 14px;
          color: #000000;
          float: left;
        }
      }
      .data-content {
        .data-list {
          float: left;
          width: 33.33%;
          .num {
            font-size: 16px;
            color: #000000;
            padding-bottom: 14px;
          }
          .total {
            font-size: 13px;
            color: #888888;
            padding-bottom: 29px;
          }
        }
      }
    }
    .sort {
      margin-left: 15px;
      margin-right: 15px;
      background-color: #ffffff;
      margin-top: 15px;
      overflow: hidden;
      border-radius: 10px;
      .category {
        padding-left: 18px;
        padding-top: 17px;
        padding-bottom: 13.5px;
        overflow: hidden;
        .category-pht {
          background-image: url("../assets/images/ic.png");
          background-repeat: no-repeat;
          width: 15px;
          height: 15px;
          background-size: 100% 100%;
          float: left;
          margin-right: 7px;
        }
        .category-tol {
          float: left;
          font-size: 14px;
          color: #000000;
        }
      }
      .kind {
        overflow: hidden;
        padding-bottom: 17.5px;
        padding-left: 7.5px;
        padding-right: 7.5px;
        .kind-list {
          float: left;
          margin-left: 7.5px;
          margin-right: 7.5px;
          margin-top: 7.5px;
          margin-bottom: 7.5px;
          width: 50%;
          width: 150px;
          background-color: #f1f1f1;
          border-radius: 5px;
          .kind-img {
            background-image: url("../assets/images/kuan.png");
            background-repeat: no-repeat;
            width: 32px;
            height: 32px;
            background-size: 100% 100%;
            border-radius: 5px;
            margin-left: 59px;
            margin-top: 18px;
            margin-bottom: 13px;
          }
          .kind-tol {
            font-size: 14px;
            color: #222222;
            margin-bottom: 13px;
          }
          .pht {
            background-image: url("../assets/images/hu.png");
          }
          .time {
            background-image: url("../assets/images/qi.png");
          }
          .model {
            background-image: url("../assets/images/feng.png");
          }
        }
      }
    }
    .board {
      background-color: #ffffff;
      overflow: hidden;
      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 10px;
      .board-rank {
        float: left;
        margin-top: 17px;
        margin-bottom: 18px;
        margin-left: 15px;
        padding-left: 10px;
        border-left: 3px solid #60aee7;
      }
      .el-icon-arrow-right {
        float: right;
        line-height: 55px;
        padding-right: 20px;
      }
    }
  }
</style>

