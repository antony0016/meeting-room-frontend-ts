<template>
  <el-tooltip :content="item.hint">
    <el-button
      class="btn"
      size="large"
      :icon="item.icon"
      :round="round"
      @click="redirect"
    >
      <span v-if="item.text !== ''"> {{ item.text }}</span>
    </el-button>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { defineProps, toRef } from "vue";
import { NavItem } from "@/models/general/navItem";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{ item: NavItem; round?: false | true }>();
const item = toRef(props, "item");
const round = toRef(props, "round");

const redirect = function () {
  router.push(item.value.path);
};
</script>

<style lang="sass" scoped>
.btn
  font-size: 16px
</style>
