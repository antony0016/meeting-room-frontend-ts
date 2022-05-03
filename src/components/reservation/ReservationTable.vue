<template>
  <el-row v-show="show">
    <el-col>
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
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  toRef,
  ref,
  computed,
  Ref,
  toRefs,
} from "vue";
import { CReservation } from "@/models/reservation";

const props = defineProps<{
  show: boolean;
  data: CReservation[];
  infoData: CReservation;
}>();
const emits = defineEmits<{
  (event: "update:info", reservations: CReservation): void;
}>();
const { show, data: reservations } = toRefs(props);

const showReservation = (reservation: CReservation) => {
  emits("update:info", reservation);
};

type Header = {
  prop: string;
  label: string;
  width?: string;
};

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
</script>

<style scoped></style>
