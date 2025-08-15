import {onMounted, onUnmounted} from 'vue';
export function useEventListener(element, event, callback) {

     onMounted(() => {
    window.addEventListener('mousemove', callback);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', callback);
  });
}