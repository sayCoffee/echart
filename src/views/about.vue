<template>
  <div class="about">
    <div class="user">
      <div class="user-tol">按用户统计</div>
      <div class="find">
        <span class="placeholder-text"><i class="el-icon-search"></i>搜索</span>
        <input type="text" class="find-content">
      </div>
      <div class="share">
        <span class="share-num">分享次数</span>
        <i class="el-icon-caret-bottom"></i>
        <span class="chioce">选择用户</span>
      </div>
    </div>
    <div class="user-info">
      <ul>
        <li v-for="(item, key) in avatar" :key="key" :class="{ active: index === key }" @click="handClick(key)">
          <img :src="item.src">
          <span class="user-name">{{ item.peo }}</span>
          <div class="select"></div>
        </li>
      </ul>
    </div>
    <div>
      <selectList v-if="index" />
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
        avatar: [{
            src: require('../assets/images/da.png'),
            peo: '演员'
          },
          {
            src: require('../assets/images/de.png'),
            peo: '小甜甜'
          },
          {
            src: require('../assets/images/ws.png'),
            peo: '布莱尼'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '演员'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '小甜甜'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '布莱尼'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '演员'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '小甜甜'
          },
          {
            src: require('../assets/images/da.png'),
            peo: '布莱尼'
          },
        ],
        index: '',
      }
    },
    methods: {
      handClick(key){
        if (this.index === key) {
          this.index = '';
        } else {
          this.index = key;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .about {
    .user {
      background-color: #fafafc;
      .user-tol {
        padding-top: 16px;
        padding-bottom: 14px;
        font-size: 19px;
        color: #000000;
        text-align: center;
      }
      .find {
        margin: 9px 15px 22px 15px;
        background-color: #eeeeee;
        border-radius: 16px;
        height: 31px;
        position: relative;
        .placeholder-text {
          font-size: 15px;
          color: #333333;
          position: absolute;
          left: 50%;
          top: 5.5px;
          margin-left: -22.5px;
          margin-top: 0;
          .el-icon-search {
            margin-right: 5px;
          }
        }
        .find-content {
          font-size: 15px;
          color: #333333;
          outline: none;
          border: 0;
          background-color: #eeeeee;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
        }
      }
      .share {
        padding-left: 15px;
        padding-right: 16px;
        padding-bottom: 14px;
        text-align: left;
        span {
          font-size: 14px;
          color: #000000;
        }
        .share-num {
          margin-right: 7px;
        }
        .el-icon-caret-bottom {
          color: #888888;
        }
        .chioce {
          float: right;
        }
      }
    }
    .user-info {
      background-color: #ffffff;
      padding-left: 15px;
      text-align: left;
      ul {
        li {
          padding-top: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #dddddd;
          position: relative;
          &::after {
            content: "";
            display: block;
          }
          img {
            width: 40px;
            height: 40px;
            background-size: 100% 100%;
            margin-right: 13px;
            transition: 500ms all;
          }
          .user-name {
            display: inline-block;
            font-size: 15px;
            color: #000000;
            position: absolute;
            top: 50%;
            margin-top: -10px;
            transition: 500ms all;
          }
          .select {
            background-image: url("../assets/images/re.png");
            background-repeat: no-repeat;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -12px;
            // display: none;
            transition: 500ms all;
            opacity: 0;
          }
          &.active {
            img {
              opacity: 0.3;
            }
            .user-name {
              color: #bbbbbb;
            }
            .select {
              // display: block;
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
