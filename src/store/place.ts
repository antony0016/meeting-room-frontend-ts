import { defineStore } from "pinia";
import { CLocation } from "@/models/location";
import { CRoom } from "@/models/room";
import { useServerStore } from "@/store/server";
import { axiosInstance } from "@/axios";

export const usePlaceStore = defineStore("place", {
  state: () => ({
    rooms: [
      { id: 0, room_name: "", location_id: 0, is_deleted: false },
    ] as CRoom[],
    locations: [] as CLocation[],
  }),
  getters: {
    roomLocationIdMap: (state) => {
      const temp = {} as { [key: number]: number };
      // console.log(state.rooms);
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
          // console.log(result.data);
          this.locations = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
});
