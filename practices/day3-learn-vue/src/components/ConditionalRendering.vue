<script setup>
// import { ref } from 'vue';

// const isVisible = ref(false);

// const toggleVisibility = () => {
//     isVisible.value = !isVisible.value;
// };

import { ref, computed } from "vue";

const isLoggedIn = ref(false);
const isAdmin = ref(false);
const showPanel = ref(true);

const users = ref([
  { id: 1, name: "Ram", active: true },
  { id: 2, name: "Shyam", active: false },
  { id: 3, name: "Hari", active: true },
  { id: 4, name: "Gita", active: false },
  { id: 5, name: "Sita", active: true },
]);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value;
};

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};

const activeUsers = computed(() => users.value.filter((user) => user.active));

const userIndex = ref(0);
const nextUser = () => {
  userIndex.value = (userIndex.value + 1) % users.value.length;
};
</script>

<template>
  <div>
    <!-- <h1>Conditional Rendering in Vue</h1> -->
    <!-- <p v-if="isVisible">This text is conditionally visible.</p>
        <button @click="toggleVisibility">
        {{ isVisible ? 'Hide' : 'Show' }} Text
        </button> -->

    <h2>Login State</h2>
    <button @click="toggleLogin">{{ isLoggedIn ? "Logout" : "Login" }}</button>
    <button @click="toggleAdmin">Toggle Admin</button>

    <p v-if="isAdmin">Welcome, Admin!</p>
    <p v-else-if="isLoggedIn">Welcome back, user!</p>
    <p v-else>Please log in to continue.</p>

    <hr />

    <h2>Visibility (v-show)</h2>
    <button @click="togglePanel">
      {{ showPanel ? "Hide" : "Show" }} Panel
    </button>
    <div v-show="showPanel" class="panel">
      <p>This panel is shown/hidden using <strong>v-show</strong>.</p>
    </div>

    <hr />

    <h2>Active Users</h2>
    <ul>
      <li v-for="user in activeUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <button @click="nextUser">Next User</button>
    <p>Current User: {{ users[userIndex].name }}</p>
  </div>
</template>

<style scoped>
/* h1 {
    color: #42b983;
}   
p {
    font-size: 1.2em;
    margin: 10px 0;
}
button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}   
button:hover {
    background-color: #367c6b;
} */

.panel {
  padding: 10px;
  background-color: #eef;
  margin-top: 10px;
  border: 1px solid #ccd;
}

button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #368f75;
}
</style>
