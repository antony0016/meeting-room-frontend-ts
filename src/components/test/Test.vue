<template>
  <el-row>
    <el-col>
      <el-button @click="emitValue">try!</el-button>
    </el-col>
    <el-col>{{ `inside ${a}` }}</el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, toRefs } from "vue";

const props = defineProps({
  a: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(["update:a"]);
let { a } = toRefs(props);

const emitValue = () => {
  emits("update:a", a?.value + 1);
};
</script>

<style scoped></style>
