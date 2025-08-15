
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export function useApiData(apiUrl) {
  const data = ref([]);
  const searchQuery = ref('');
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      data.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const filteredData = computed(() => {
    return data.value.filter(item =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  onMounted(fetchData);

  return { filteredData, searchQuery, loading, error };
}
