import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permissions', {
  state: () => ({
    userPermissions: ['user.edit', 'user.view'] 
  }),
  getters: {
    hasPermission: (state) => (key) => {
      if (!key) return true
      return state.userPermissions.includes(key)
    }
  }
})
