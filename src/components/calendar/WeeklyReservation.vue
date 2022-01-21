<template>
  <el-card header="會議室時刻表" shadow="never">
    <el-row>
      <el-col>
        <!--        {{ props.weeklyReservation }}-->
        <el-button @click="showReservationInfo = !showReservationInfo"
          >show</el-button
        >
      </el-col>
      <el-col>
        <reservation-info
          :show="showReservationInfo"
          :data="showData"
          a="123"
        ></reservation-info>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Reservation } from "@/models/reservation";
import ReservationInfo from "@/components/reservation/ReservationInfo.vue";

const props = defineProps<{ weeklyReservation: Reservation[] }>();
const showData = ref({} as Reservation);
const showReservationInfo = ref(false);
</script>

<style scoped></style>
