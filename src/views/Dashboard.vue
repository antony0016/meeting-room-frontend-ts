<template>
  <el-row>
    <el-col>
      <el-card header="我的應用">
        <applications></applications>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Applications from "@/components/Applications.vue";

export default defineComponent({
  name: "Dashboard",
  components: { Applications },
});
</script>

<style scoped></style>
