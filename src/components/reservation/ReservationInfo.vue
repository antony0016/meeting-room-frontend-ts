<template>
  <el-dialog :model-value="show">
    <el-card>
      <el-row>
        <el-col>
          {{ reservation }}
        </el-col>
      </el-row>
    </el-card>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, ref, toRef } from "vue";
import { Reservation } from "@/models/reservation";

const props = defineProps<{ data: Reservation; show: boolean }>();
const reservation = toRef(props, "data");
// const show = toRef(props, "show");
const show = toRef(props, "show");
</script>

<style lang="scss" scoped></style>
