<script>
import { useApiData } from "../composables/useApis";

export default {
  setup() {
    const { filteredData, searchQuery, loading, error } = useApiData(
      "https://jsonplaceholder.typicode.com/users"
    );

    return { filteredData, searchQuery, loading, error };
  },
};
</script>

<template>
  <div>
    <h1>User List</h1>
    <input v-model="searchQuery" placeholder="Search by name" />
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>

    <ul>
      <li v-for="user in filteredData" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
