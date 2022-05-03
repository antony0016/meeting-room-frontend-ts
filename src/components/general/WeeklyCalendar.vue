<template>
  <el-table></el-table>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, toRefs } from "vue";

let weekdays = {
  0: { label: "星期日" },
  1: { label: "星期一" },
  2: { label: "星期二" },
  3: { label: "星期三" },
  4: { label: "星期四" },
  5: { label: "星期五" },
  6: { label: "星期六" },
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  minTime: {
    type: String,
    required: false,
  },
  maxTime: {
    type: String,
    required: false,
  },
  allowMinute: {
    type: Function,
    required: false,
  },
});
const { data, allowMinute, minTime, maxTime } = toRefs(props);
</script>

<style scoped></style>
