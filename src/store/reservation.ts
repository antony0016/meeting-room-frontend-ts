import { defineStore } from "pinia";
import { CReservation } from "@/models/reservation";
import { axiosInstance } from "@/axios";
import { useServerStore } from "@/store/server";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    reservations: [] as CReservation[],
  }),
  getters: {},
  actions: {
    getReservation: function () {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .get(api.version + api.path.reservation)
        .then((result) => {
          // console.log(result.data)
          this.reservations = result.data;
        });
    },
  },
});
