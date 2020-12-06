<template>
  <div>
    <el-row class="demo-avatar demo-basic">
      <!-- 头像 -->
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
      </div>
      <div class="sub-title">{{ user.username }}</div>
      <!-- 卡片 -->
      <el-card class="box-card">
        <div v-for="(value, key) in user" :key="key" class="text item">
          {{ key }}:{{ value }}
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import request from "@/service";
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        // id: 1,
        // username: "001",
        // department_id: 1,
        // account_id: 1,
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  computed: {
    ...mapState(["username"]),
  },
  methods: {},
  mounted() {
    request
      .get("/user/info", {
        username: this.username,
      })
      .then((res) => {
        if (res.data.success) {
          this.user = res.data.data;
        } else {
          this.$Message.error(res.data.msg);
        }
      });
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
.box-card {
  margin: 0 auto;
}
</style>