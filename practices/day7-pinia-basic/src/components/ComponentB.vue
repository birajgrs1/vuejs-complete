<script setup>
import { useUsersStore } from '../store/users';
import { storeToRefs } from 'pinia';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

const addUser = () => {
    usersStore.addUser({ id: 4, name: 'Sarah Connor', email: 'sarah.connor@.com' });
};

const deleteUser = (id) => {
    usersStore.deleteUser(id);
};

const updateUser = () => {
    usersStore.updateUser({ id: 2, name: 'Jane Doe Updated', email: 'jane.updated@.com' });
};

const replaceState = () => {
    usersStore.replaceState({
        users: [
            { id: 5, name: 'Chris Johnson', email: 'chris.johnson@.com' },
            { id: 6, name: 'Anna Smith', email: 'anna.smith@.com' }
        ]
    });
};

const patchState = () => {
    usersStore.patchState([{ id: 3, name: 'John Doe Updated', email: 'john.doe.updated@.com' }]);
};

const resetState = () => {
    usersStore.resetState();
};
</script>

<template>
  <hr>
  <h1>Component B</h1>
  <ul>
    <li v-for="user in users" :key="user.id" class="user-item">
      {{ user.name }} - {{ user.email }}
    </li>
  </ul>
  <div class="button-group">
    <button @click="addUser" class="btn add-btn">Add User</button>
    <button @click="deleteUser(2)" class="btn delete-btn">Delete User</button>
    <button @click="updateUser" class="btn update-btn">Update User</button>
    <button @click="replaceState" class="btn replace-btn">Replace State</button>
    <button @click="patchState" class="btn patch-btn">Patch State</button>
    <button @click="resetState" class="btn reset-btn">Reset State</button>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Arial', sans-serif;
  color: #2C3E50;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.user-item {
  font-size: 16px;
  color: #34495e;
  margin: 10px 0;
}

.button-group {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.add-btn {
  background-color: #3498db;
  color: white;
}

.add-btn:hover {
  background-color: #2980b9;
}

.add-btn:active {
  background-color: #1abc9c;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

.delete-btn:hover {
  background-color: #c0392b;
}

.delete-btn:active {
  background-color: #d35400;
}

.update-btn {
  background-color: #f39c12;
  color: white;
}

.update-btn:hover {
  background-color: #e67e22;
}

.update-btn:active {
  background-color: #d35400;
}

.replace-btn {
  background-color: #9b59b6;
  color: white;
}

.replace-btn:hover {
  background-color: #8e44ad;
}

.replace-btn:active {
  background-color: #7f3b7c;
}

.patch-btn {
  background-color: #16a085;
  color: white;
}

.patch-btn:hover {
  background-color: #1abc9c;
}

.patch-btn:active {
  background-color: #16a085;
}

.reset-btn {
  background-color: #95a5a6;
  color: white;
}

.reset-btn:hover {
  background-color: #7f8c8d;
}

.reset-btn:active {
  background-color: #616a6b;
}
</style>
