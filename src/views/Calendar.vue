<template>
  <el-row>
    <el-col>
      <el-button @click="isList = !isList" size="large" style="width: 100%">
        切換{{ isList ? "圖像版" : "懷舊版" }}
      </el-button>
    </el-col>
    <el-divider border-style="dashed"></el-divider>
    <el-col>
      <el-card header="會議室時刻表" shadow="never">
        <el-tabs v-model="choseLocationId">
          <el-tab-pane
            v-for="(location, index) in locations"
            :key="index"
            :label="location.location_name"
            :name="location.id.toString()"
          >
          </el-tab-pane>
        </el-tabs>
        <reservation-table
          v-show="isList"
          :data="indexedReservations ? indexedReservations : []"
          :show="isList"
          :info-data="choseReservation"
        >
        </reservation-table>
        <weekly-reservation
          v-show="!isList"
          :data="indexedReservations ? indexedReservations : []"
        ></weekly-reservation>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { ReservationFilter } from "@/apis/reservation";
import { CReservation } from "@/models/reservation";
import WeeklyReservation from "@/components/calendar/WeeklyReservation.vue";
import ReservationTable from "@/components/reservation/ReservationTable.vue";
import { usePlaceStore } from "@/store/place";
// import { TimeFunction } from "@/apis/general";

// pinia store instance
const reservationFilter = ReservationFilter();
// const timeFunction = TimeFunction();
const placeStore = usePlaceStore();

// data & computed
const isList = ref(false);
const locations = computed(() =>
  placeStore.locations.filter((l) => !l.is_deleted)
);
const choseLocationId = ref("0");
const choseReservation: CReservation = new CReservation();
const indexedReservations = computed(
  () =>
    reservationFilter.indexedReservations.value[parseInt(choseLocationId.value)]
);

// watch
watchEffect(() => {
  // console.log(locations)
  if (locations.value.length === 0) {
    return;
  }
  choseLocationId.value = locations.value[0].id.toString();
});
</script>

<style scoped></style>
