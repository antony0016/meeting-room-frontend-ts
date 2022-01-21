<template>
  <el-row>
    <el-col>
      <el-button @click="isList = !isList" size="large" style="width: 100%">
        切換{{ isList ? "圖像版" : "懷舊版" }}
      </el-button>
    </el-col>
    <el-divider></el-divider>
    <el-col v-show="isList">
      <el-card header="會議室時刻表" shadow="never">
        <!--        <el-button @click="test">test</el-button>-->
        <el-table
          :data="reservations"
          style="width: 100%"
          @row-click="showReservation"
        >
          <el-table-column
            v-for="(h, index) in tableHeaders"
            :prop="h.prop"
            :label="h.label"
            :key="index"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col v-show="!isList">
      <weekly-reservation
        :weekly-reservation="reservations"
      ></weekly-reservation>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ReservationFilter } from "@/apis/reservation";
import { Reservation } from "@/models/reservation";
import WeeklyReservation from "@/components/calendar/WeeklyReservation.vue";

type Header = {
  prop: string;
  label: string;
  width?: string;
};

// pinia store instance
const reservationFilter = ReservationFilter();
// data
const tableHeaders = ref([
  {
    prop: "room_name",
    label: "會議室",
  },
  {
    prop: "reason",
    label: "事由",
  },
  {
    prop: "nickname",
    label: "預約人",
  },
  {
    prop: "use_date",
    label: "使用日期",
  },
  {
    prop: "start_time",
    label: "開始時間",
  },
  {
    prop: "end_time",
    label: "結束時間",
  },
] as Header[]);
const isList = ref(false);
const showReservation = (reservation: Reservation) => {
  console.log(reservation);
};
const reservations = reservationFilter.availableReservations;
</script>

<style scoped></style>
