<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span class="el-icon-arrow-left"></span>
        <span class="el-icon-arrow-right"></span>
      </div>
    </div>
    <div class="right-box">
      <div class="user">
        用户名
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  
};
</script>

<style>
.user{
  display: flex;
  align-items:baseline;
}
</style>