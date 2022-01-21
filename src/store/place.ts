import { defineStore } from "pinia";
import { Location } from "@/models/location";
import { Room } from "@/models/room";
import { useServerStore } from "@/store/server";
import { axiosInstance } from "@/axios";

export const usePlaceStore = defineStore("place", {
  state: () => ({
    rooms: [] as Room[],
    locations: [] as Location[],
  }),
  getters: {
    locationMap: (state) => {
      const temp = {} as { [key: number]: number };
      state.rooms.forEach((r) => {
        temp[r.id] = r.location_id;
      });
      return temp;
    },
  },
  actions: {
    getRooms: function () {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .get(api.version + api.path.room)
        .then((result) => {
          // console.log(result);
          this.rooms = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    getLocations: function () {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .get(api.version + api.path.location)
        .then((result) => {
          // console.log(result);
          this.locations = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
});
