<script>
// import HelloWorld from './components/HelloWorld.vue'

import { ref, onMounted, defineAsyncComponent } from "vue";
import axios from "axios";

const UserCard = defineAsyncComponent({
  loader: () => import("./components/UserCard.vue"),
  errorComponent: {
    template: "<p>Error loading card component</p>",
  },
  delay: 200,
  timeout: 5000,
});

export default {
  components: {
    UserCard,
  },
  setup() {
    const users = ref([]);
    const error = ref(null);

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        users.value = response.data;
      } catch (err) {
        error.value = "Failed to load user data";
        console.error("Error fetching users:", err);
      }
    };

    onMounted(() => {
      fetchUsers();
    });

    return {
      users,
      error,
    };
  },
};
</script>

<template>
  <!-- <h4>I am AppComponent.</h4>
    <HelloWorld  /> -->
  <div class="app">
    <h1>Users List</h1>
    <Suspense>
      <template #default>
        <div v-if="users.length">
          <UserCard v-for="user in users" :key="user.id">
            <template #header>
              <h2>{{ user.name }}</h2>
            </template>
            <template #body>
              <p>Email: {{ user.email }}</p>
              <p>Phone: {{ user.phone }}</p>
            </template>
          </UserCard>
        </div>
        <div v-else>
          <p>Loading users...</p>
        </div>
      </template>

      <template #fallback>
        <p>Loading user cards...</p>
      </template>
    </Suspense>

    <div v-if="error" class="error-message">
      <p>An error occurred: {{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #4caf50;
}

.user-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.error-message {
  color: red;
  font-weight: bold;
}

p {
  margin: 10px 0;
}
</style>


