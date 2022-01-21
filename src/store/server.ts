import { defineStore } from "pinia";
import { axiosInstance } from "@/axios";

// export const ApiPath = {
//   user: "users/",
//   location: "locations/",
//   room: "rooms/",
//   reservation: "reservations/",
//   token: "token/",
//   roomExchangeRequest: "room_exchange_request/",
// } as const;

export const useServerStore = defineStore("server", {
  state: () => ({
    // domain: "http://localhost:8000/",
    api: {
      version: "api/v1/",
      path: {
        user: "users/",
        location: "locations/",
        room: "rooms/",
        reservation: "reservations/",
        token: "token/",
        roomExchangeRequest: "room_exchange_request/",
      },
    },
  }),
  actions: {},
});
