<template>
  <el-row justify="space-between" align="middle" id="nav-bar">
    <el-col id="right-items" :span="20">
      <el-scrollbar>
        <single-item
          v-for="(navItem, index) in dynamicNavItems"
          :key="index"
          :item="navItem"
        ></single-item>
      </el-scrollbar>
    </el-col>
    <el-col :span="4" id="login-function" align="end">
      <el-tooltip content="登入">
        <el-button size="large">登入</el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavItem } from "@/models/general/navItem";
import { CirclePlus, House, Calendar, Edit } from "@element-plus/icons-vue";
import SingleItem from "@/components/general/SingleItem.vue";

export default defineComponent({
  components: { SingleItem },
  computed: {
    dynamicNavItems: function (): NavItem[] {
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
          hide: true,
        } as NavItem,
      ] as NavItem[];
      return items.filter((item: NavItem) => {
        return !item.hide;
      });
    },
  },
});
</script>

<style lang="sass" scoped>
#nav-bar
  box-shadow: var(--el-box-shadow-base)
  padding: 10px 0px 10px 10px
</style>
