import { reactive, readonly } from 'vue'

const toastState = reactive({
  message: '',
  type: 'success',
  visible: false,
})

function show(message, type = 'success') {
  toastState.message = message
  toastState.type = type
  toastState.visible = true

  setTimeout(() => {
    toastState.visible = false
  }, 3000)
}

export function useToast() {
  return {
    toast: readonly(toastState),
    showSuccess: (msg) => show(msg, 'success'),
    showError: (msg) => show(msg, 'error'),
    showInfo: (msg) => show(msg, 'info'),
  }
}
