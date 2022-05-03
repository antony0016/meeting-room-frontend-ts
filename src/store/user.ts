import { defineStore } from "pinia";
import { CLoginPayload, CUser } from "@/models/user";
import { axiosInstance } from "@/axios";
import { useServerStore } from "@/store/server";
import { DecodeFunction } from "@/apis/general";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as CUser,
    token: {
      access: "",
      refresh: "",
    },
  }),
  actions: {
    login: function (loginPayload: CLoginPayload) {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .post(api.version + api.path.token, loginPayload)
        .then((response) => {
          this.token.access = response.data.access;
          this.token.refresh = response.data.refresh;
          const decodeFunction = DecodeFunction();
          this.user.id = parseInt(
            decodeFunction.getDataFromJWT(this.token.access, "user_id")
          );
          this.getUser();
        });
    },
    getUser: function () {
      const serverStore = useServerStore();
      const api = serverStore.api;
      return axiosInstance
        .get(api.version + api.path.user + this.user.id + "/")
        .then((response) => {
          this.user = response.data;
        });
    },
    logout: function () {
      this.token.access = "";
      this.token.refresh = "";
      this.user = new CUser();
    },
  },
});
