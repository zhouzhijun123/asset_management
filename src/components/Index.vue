<template>
  <div class="index-container">
    <div class="nav">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu v-for="item in menu" :key="item.name" :index=item.name>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="subItem.id"
              >
              <router-link to="/home/userinfo" tag="li">{{ subItem.name }}</router-link>
              
              
              </el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
//import {mapState} from 'vuex'
export default {
  data() {
    return {
      menu: this.$store.state.menu,
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
  },

  //   computed:{
  //     ...mapState(['menu'])
  // }
};
</script>
<style lang="scss">
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(250px);
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
</style>