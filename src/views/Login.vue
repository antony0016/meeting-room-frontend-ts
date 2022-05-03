<template>
  <el-form ref="loginForm" :model="loginFormData" :rules="loginRules">
    <el-row justify="center">
      <el-col :span="20">
        <el-form-item label="帳號" prop="username">
          <el-input v-model="loginFormData.username"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="20">
        <el-form-item label="密碼" prop="password">
          <el-input v-model="loginFormData.password" type="password"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="20">
        <el-form-item label=" ">
          <el-button @click="login(loginForm)">登入</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import type { ElForm } from "element-plus";

const loginFormData = ref({ username: "", password: "" });
type FormInstance = InstanceType<typeof ElForm>;
const loginForm = ref<FormInstance>();
const loginRules = ref({
  username: [{ required: true, message: "請輸入帳號", trigger: "change" }],
  password: [{ required: true, message: "請輸入密碼", trigger: "change" }],
});
const userStore = useUserStore();
const login = (ElForm: FormInstance) => {
  ElForm.validate()
    ?.then(() => {
      userStore.login(loginFormData.value);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
