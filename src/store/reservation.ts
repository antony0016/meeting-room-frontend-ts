import { defineStore } from "pinia";
import { Reservation } from "@/models/reservation";
import { axiosInstance } from "@/axios";
import { useServerStore } from "@/store/server";

export const useReservationStore = defineStore("reservation", {
  state: () => ({
    reservations: [] as Reservation[],
  }),
  getters: {},
  actions: {
    getReservation: function () {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .get(api.version + api.path.reservation)
        .then((result) => {
          console.log(result);
          this.reservations = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
});
