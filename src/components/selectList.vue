<template>
  <div class="select">
    <div class="select-list">
      <i class="el-icon-arrow-down"></i>
      <span class="chioce">请选择1-9种{{ title }}(9)</span>
      <router-link :to="to" class="det" tag="span">确定</router-link>
    </div>
    <div 
      v-if="to === '/styles'"
      class="hop">
      <span v-for="(v, key) in list" :key="key" class="style-list">{{ v.text }}</span>
    </div>
    <div v-else-if="to === '/user'" class="hop-about">
      <div v-for="(e, key) in list" :key="key" class="style-about">
        <img :src="e.src">
      </div>
    </div>
    <div v-else-if="to === '/ways'" class="hop-way">
      <div v-for="(t, key) in list" :key="key" class="style-way">
        <img :src="t.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      default() {
        return [];
      },
      type: Array,
    },
    to: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .select {
    height: 104px;
    text-align: left;
    margin-top: 37px;
    .select-list {
      padding-left: 15px;
      padding-right: 15px;
      .el-icon-arrow-down {
        padding-right: 10px;
        padding-left: 1px;
      }
      .chioce {
        font-size: 14px;
      }
      .det {
        float: right;
        color: #333333;
        display: block;
        width: 50px;
        height: 24px;
        background-image: linear-gradient(90deg,	#3272dc 0%,	#53a5e1 100%);
        border-radius: 2px;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        line-height: 24px;
      }
    }
    .hop {
      text-align: center;
      margin: 15.5px 7.5px 15px 7.5px;
      overflow: hidden;
      .style-list {
        width: 75px;
        height: 40px;
        border-radius: 5px;
        line-height: 40px;
        display: block;
        float: left;
        font-size: 14px;
        color: #136cca;
        border-radius: 5px;
        margin: 7.5px;
        background-color: #e8eef5;
      }
    }
    .hop-about {
      overflow: hidden;
      margin-top: 15.5px;
      margin-bottom: 7.5px;
      .style-about {
        float: left;
        width: 60px;
        height: 60px;
        margin-left: 15px;
        margin-top: 7.5px;
        margin-bottom: 7.5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .hop-way {
      overflow: hidden;
      margin-top: 18px;
      margin-bottom: 5px;
      .style-way {
        float: left;
        width: 60px;
        height: 80px;
        margin-left: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
