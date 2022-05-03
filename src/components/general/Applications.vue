<template>
  <el-row>
    <el-col>
      <single-item
        v-for="(item, index) in computedApps"
        :key="index"
        :item="item"
      ></single-item>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Calendar, CirclePlus } from "@element-plus/icons-vue";
import { NavItem } from "@/models/general/navItem";
import SingleItem from "@/components/general/SingleApp.vue";

export default defineComponent({
  name: "Applications",
  components: { SingleItem },
  computed: {
    computedApps: function (): NavItem[] {
      let items = [
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
      ] as NavItem[];
      return items.filter((item: NavItem) => {
        return !item.hide;
      });
    },
  },
});
</script>

<style scoped></style>
