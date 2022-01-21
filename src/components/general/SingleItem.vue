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
    <!--    <el-button-->
    <!--      size="large"-->
    <!--      :icon="item.icon"-->
    <!--      :round="round"-->
    <!--      @click="redirect"-->
    <!--      v-if="item.text === ''"-->

    <!--    >-->
    <!--    </el-button>-->
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NavItem } from "@/models/general/navItem";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SingleItem",
  props: {
    item: {
      type: Object as PropType<NavItem>,
      required: true,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    redirect: function () {
      this.router.push(this.item.path);
    },
  },
});
</script>

<style lang="sass" scoped>
.btn
  font-size: 16px
</style>
