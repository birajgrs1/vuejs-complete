import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);

  const login = (email: string, password: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        user.value = {
          id: 1,
          email,
          name: "Test User",
          token: "fake-jwt-token",
        };
        isAuthenticated.value = true;
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  const register = (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        user.value = {
          id: 2,
          email: userData.email,
          name: userData.name,
          token: "fake-jwt-token",
        };
        isAuthenticated.value = true;
        resolve();
      }, 500);
    });
  };

  return { user, isAuthenticated, login, logout, register };
});
