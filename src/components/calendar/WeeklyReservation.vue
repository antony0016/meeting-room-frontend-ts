<template>
  <el-row>
    <el-col>
      <!-- todo: 1. change reservations object format to fit the element plus table -->
      <!-- todo: 2. make this component more readable -->
      <el-table :data="reservationsWithTimePeriod">
        <el-table-column
          v-for="(key, index) in [
            '星期',
            ...calculatedWeekDate.map((w) => w.toString()),
          ]"
          :key="index"
          :label="key"
          :prop="key"
        >
          <template #default="r">
            <div
              v-for="(reservation, index) in r.row.reservations.filter(
                (r) => r.use_date === key
              )"
              :key="index"
            >
              <el-card
                shadow="hover"
                @click="beforeShowReservation(reservation)"
              >
                <div>
                  {{ reservation.room_id }}
                </div>
                <div>
                  {{ reservation.reason }}
                </div>
              </el-card>
            </div>
            <div v-if="key === '星期'">
              {{ r.row.time }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col>
      <reservation-info
        v-model:data="showData"
        v-model:show="showReservationFlag"
      ></reservation-info>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType, ref, toRefs } from "vue";
import { CReservation } from "@/models/reservation";
import { TimeFunction } from "@/apis/general";
import ReservationInfo from "@/components/reservation/ReservationInfo.vue";

const timeFunction = TimeFunction();
const today = computed(() => timeFunction.today);
const calculatedWeekDate = computed(() =>
  timeFunction.DateOfWeek(today.value.toString())
);
// props
const props = defineProps({
  data: { type: Array as PropType<Array<CReservation>>, required: true },
});
const { data: reservations } = toRefs(props);
const timePeriods = [] as string[];
for (let i = 8; i < 23; i++) {
  let time = (i >= 10 ? "" : "0") + i.toString() + ":00";
  timePeriods.push(time);
}

// valid reservations in week
const inWeekReservations = computed(() => {
  let weekTemp = calculatedWeekDate.value.map((w) => w.toString());
  return reservations?.value.filter((r) => weekTemp.includes(r.use_date));
});

const reservationsWithTimePeriod = computed(() => {
  let rwt = [] as { time: string; reservations: CReservation[] }[];
  console.log(inWeekReservations.value);
  timePeriods.forEach((tp) => {
    let temp = { time: tp, reservations: [] as CReservation[] };
    inWeekReservations.value.forEach((r: CReservation) => {
      const startTime = (r.start_time.length === 5 ? "" : "0") + r.start_time;
      const endTime = (r.end_time.length === 5 ? "" : "0") + r.end_time;
      // console.log(startTime, endTime, tp);
      // console.log(timeFunction.TimeCompare(startTime, tp));
      // console.log(timeFunction.TimeCompare(tp, endTime));
      if (
        timeFunction.TimeCompare(tp, startTime) &&
        timeFunction.TimeCompare(endTime, tp)
      ) {
        temp.reservations.push(r);
      }
    });
    rwt.push(temp);
  });
  return rwt;
});

// data & computed
const showData = ref({} as CReservation);
const showReservationFlag = ref(false);

// methods
const beforeShowReservation = (r: CReservation) => {
  showReservationFlag.value = true;
  showData.value = r;
};
</script>

<style lang="sass" scoped>
.today
  color: var(--el-color-warning)
</style>
