<template>
  <div class="style">
    <div class="style-title">
      <div class="title">按风格统计</div>
      <div class="share">
        <span>分享次数</span>
        <i class="el-icon-caret-bottom"></i>
        <span class="style-select">选择风格</span>
      </div>
    </div>
    <div class="style-list">
        <ul>
          <li 
            v-for="(item, key) in styles" 
            :key="key"
            :class="{ active: chioceList.indexOf(key) !== -1 }"
            @click="getClick(key)">
            <div class="style-kind">{{ item.text }}</div>
            <div class="chioce"></div>
          </li>
        </ul>
    </div>
    <div>
      <selectList v-if="chioceArr.length" to="/styles" title="风格" :list="chioceArr" />
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
        styles: [
          {
            text: '嘻哈',
            id: 1
          },
          {
            text: '街头',
            id: 2
          },
          {
            text: '日韩',
            id: 3
          },
          {
            text: '性感',
            id: 4
          },
          {
            text: '街拍范',
            id: 5
          },
          {
            text: '休闲运动',
            id: 6
          },
          {
            text: '朋克',
            id: 7
          }
        ],
        table: '',
        chioceList: [],
        chioceArr: [],
      }
    },
    methods: {
      getClick(key){
        if (this.chioceList.indexOf(key) === -1) {
          this.chioceList.push(key);
        } else {
          this.chioceList.splice(this.chioceList.indexOf(key), 1);
        }
        
        const _arr = [];
        if (this.chioceList.length) {
          const { styles, chioceList } = this;
          for (let index = 0; index < chioceList.length; index++) {
            const element = chioceList[index];
            _arr.push(styles[element]);
          }
        }
        this.chioceArr = _arr;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .style {
    height: 100%;
    background-color: #ffffff;
    .style-title {
      background-color: #fafafc;
      .title {
        font-size: 19px;
        color: #000000;
        padding-top: 16px;
        padding-bottom: 14px;
      }
      .share {
        text-align: left;
        padding: 14px 15px;
        span {
          font-size: 14px;
          color: #000000;
        }
        .el-icon-caret-bottom {
          color: #888888;
        }
        .style-select {
          float: right;
        }
      }
    }
    .style-list {
      background-color: #ffffff;
      text-align: left;
      padding-left: 15px;
      ul {
        li {
          padding-top: 23px;
          padding-bottom: 23px;
          border-bottom: 1px solid #dddddd;
          position: relative;
          .style-kind {
            font-size: 15px;
            color: #000000;
          }
          .chioce {
            background-image: url("../assets/images/re.png");
            background-repeat: no-repeat;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -12px;
            margin-right: 0;
            transition: all 500ms;
            opacity: 0;
          }
          &.active {
            .style-kind {
              color: #bbbbbb;
            }
            .chioce {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
