<template>
  <el-row justify="space-around" align="middle" id="nav-bar">
    <el-col id="right-items" :span="20">
      <el-scrollbar>
        <single-item
          v-for="(navItem, index) in dynamicNavItems"
          :key="index"
          :item="navItem"
        ></single-item>
      </el-scrollbar>
    </el-col>
    <el-col :span="3" id="login-function" align="end">
      <el-tooltip content="登入">
        <el-button size="large" @click="redirect">登入</el-button>
      </el-tooltip>
    </el-col>
    <!--    <el-col v-if="true">-->
    <!--      <el-button @click="login">testLogin</el-button>-->
    <!--    </el-col>-->
    <!--    <el-col>-->
    <!--      {{ user }}-->
    <!--    </el-col>-->
    <!--    <el-col>-->
    <!--      {{ token }}-->
    <!--    </el-col>-->
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NavItem } from "@/models/general/navItem";
import { CirclePlus, House, Calendar, Edit } from "@element-plus/icons-vue";
import SingleItem from "@/components/general/SingleApp.vue";
import { useUserStore } from "@/store/user";
import router from "@/router";

const redirect = function () {
  router.push("login");
};
const userStore = useUserStore();
const dynamicNavItems = computed(() => {
  let items = [
    {
      text: "首頁",
      hint: "回到首頁",
      path: "/dashboard",
      icon: House,
    } as NavItem,
    {
      text: "預約",
      hint: "預約會議室",
      path: "/available-room",
      icon: CirclePlus,
    } as NavItem,
    {
      text: "日程",
      hint: "預約日程表",
      path: "/calendar",
      icon: Calendar,
    } as NavItem,
    {
      text: "管理",
      hint: "預約會議室",
      path: "/room-manage",
      icon: Edit,
      hide: !userStore.user.is_admin,
    } as NavItem,
  ] as NavItem[];
  return items.filter((item: NavItem) => {
    return !item.hide;
  });
});
</script>

<style lang="sass" scoped>
#nav-bar
  box-shadow: var(--el-box-shadow-base)
  padding: 10px 0 10px 10px
</style>
