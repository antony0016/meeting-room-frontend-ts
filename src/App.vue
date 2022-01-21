<template>
  <el-row justify="center" id="app">
    <el-col>
      <nav-bar></nav-bar>
    </el-col>
    <el-col :span="20" :xs="24">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { usePlaceStore } from "@/store/place";
import { useReservationStore } from "@/store/reservation";

const placeStore = usePlaceStore();
const reservationStore = useReservationStore();
placeStore.getLocations();
placeStore.getRooms();
reservationStore.getReservation();
</script>

<style lang="sass">
body
  margin: 0
  padding: 0

#app > *
  margin-bottom: 20px
</style>
