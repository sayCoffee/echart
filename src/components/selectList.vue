<template>
  <div class="select">
    <div class="select-list">
      <i class="el-icon-arrow-down"></i>
      <span class="chioce">请选择1-9种风格(9)</span>
      <router-link to="/user" class="det" tag="span">确定</router-link>
    </div>
    <div class="hop">嘻哈</div>
  </div>
</template>

<script>
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .select {
    height: 104px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    margin-top: 37px;
    .select-list {
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
      margin-top: 23px;
      width: 75px;
      height: 40px;
      background-color: #e8eef5;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      color: #136cca;
    }
  }
</style>
