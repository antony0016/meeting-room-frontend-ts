<template>
  <el-dialog v-model="showDetail" :title="reservation['reason']">
    <el-row>
      <el-col v-for="(key, index) in Object.keys(reservation)" :key="index">
        {{ reservation[key] }}
      </el-col>
      <el-col>
        <el-collapse v-model="itemToShow">
          <!-- I'm so sorry about that shit, but i have no choice :( -->
          <el-collapse-item
            v-for="(key, index) in Object.keys(columnToCombine)"
            :key="index"
            :name="key"
            :title="`${columnToCombine[key].name} : ${columnToCombine[key].items
              .map((column) => reservation[column.name])
              .reduce((sum, value) => sum + value)}`"
          >
            <el-row>
              <el-col
                :span="8"
                v-for="(item, index) in columnToCombine[key].items"
                :key="index"
              >
                {{ `${item.label} ${reservation[item.name]}` }}
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType, ref, toRefs } from "vue";
import { CReservation } from "@/models/reservation";

type TCombineData = { [key: string]: { [key: string]: number }[] };

const props = defineProps({
  data: { type: Object as PropType<CReservation>, required: true },
  show: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["update:show"]);
const { data: reservation, show } = toRefs(props);
const columnToCombine: {
  [key: string]: { name: string; items: { name: string; label: string }[] };
} = {
  water: {
    name: "茶水",
    items: [
      { name: "tea", label: "茶" },
      { name: "water", label: "水" },
      { name: "coffee", label: "咖啡" },
    ],
  },
  attendee: {
    name: "與會者",
    items: [
      { name: "attendee", label: "員工" },
      { name: "guest", label: "外賓" },
    ],
  },
  meal: {
    name: "餐點",
    items: [
      { name: "meal_courtyard", label: "中庭" },
      { name: "meal_buffet", label: "自助餐" },
    ],
  },
};
const showDetail = computed({
  get: () => {
    return show.value;
  },
  set: (value) => {
    emits("update:show", value);
  },
});
const itemToShow = ref(["water"]);
// const sumColumnReservation = (key: string) => {
//   let mappedValues: number[] = columnToCombine[key].items.map((column) => reservation[column.name]);
//     mappedValues.reduce((sum, column) => sum + column.name)
// }
</script>

<style lang="scss" scoped></style>
