<template>
  <div class="way">
    <div class="way-title">
      <div class="title">按款式统计</div>
      <div class="way-search">
        <span class="placeholder-text"><i class="el-icon-search"></i>搜索</span>
        <input type="text" class="find-content">
      </div>
      <div class="street">
        <div class="street-list">
          <span class="street-style">风格</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="street-list">
          <span class="street-style">日期</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="street-list chioce">
          <span class="street-style">选择款式</span>
        </div>
      </div>
    </div>
    <div class="way-pic">
      <ul>
        <li 
          v-for="(item, key) in pictures" 
          :key="key"
          @click="getClick(key)"
          :class="{ active: chioceList.includes(key) }">
          <img :src="item.src">
          <div class="way-cont">{{item.text}}</div>
          <div class="select"></div>
          </li> 
      </ul>  
    </div>
    <div>
      <selectList v-if="chooseArr.length" to="/ways" title="款式" :list="chooseArr"/>
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
       pictures:[
         {
           src:require('../assets/images/pics1.png'),
           text:'夏季韩范宽松女装潮流...'
         },
         {
           src:require('../assets/images/pics2.png'),
           text:'夏季韩范宽松女装潮流...'
         },
         {
           src:require('../assets/images/pics1.png'),
           text:'夏季韩范宽松女装潮流...'
         },
         {
           src:require('../assets/images/pics2.png'),
           text:'夏季韩范宽松女装潮流...'
         },
         {
           src:require('../assets/images/pics2.png'),
           text:'夏季韩范宽松女装潮流...'
         },
         {
           src:require('../assets/images/pics1.png'),
           text:'夏季韩范宽松女装潮流...'
         },
       ],
       stat:'',
       chioceList: [],
       chooseArr: []
      }
    },
    methods: {
       getClick(key){
        if (this.chioceList.includes(key)) {
          this.chioceList = this.chioceList.filter( function (ele) {
            return ele != key;
          });
        } else {
          this.chioceList.push(key);
        }
        const _choose = [];
        if (this.chioceList.length) {
          const { pictures, chioceList  } = this;
          for (let index = 0; index < chioceList.length; index++) {
            const element = chioceList[index];
            _choose.push(pictures[element]);
          }
        }
        this.chooseArr = _choose;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .way {
    .way-title {
        background-color: #fafafc;
      .title {
        padding-top: 16px;
        padding-bottom: 14px;
        font-size: 19px;
        color: #000000;
      }
      .way-search {
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
      .street {
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 14px;
        overflow: hidden;
        .street-list {
          float: left;
          width: 33.33%;
          text-align: center;
          &:nth-child(1) {
            text-align: left;
          }
          .street-style {
            font-size: 14px;
            color: #000000;
            padding-right: 7px;
          }
        }
        .chioce {
          text-align: right;
        }
      }
    }
    .way-pic {
      padding-left: 7.5px;
      padding-right: 7.5px;
      background-color: #f7f7f7;
      ul {
        overflow: hidden;
        li {
          background-color: #ffffff;
          border-radius: 5px 5px 0px 0px;
          float: left;
          margin-left: 7.5px;
          margin-right: 7.5px;
          margin-top: 13px;
          position: relative;
          img {
            width: 165px;
            height: 220px;
          }
          .way-cont {
            font-size: 13px;
            color: #bbbbbb;
            padding: 10px 14px 11px 10px;
          }
          .select {
            background-image: url("../assets/images/re.png");
            background-repeat: no-repeat;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            position: absolute;
            bottom: 53px;
            right: 10px;
            transition: 500ms all;
            opacity: 0;
          }
          &.active {
            opacity:0.8; 
            filter: alpha(opacity=80);
            .select {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
