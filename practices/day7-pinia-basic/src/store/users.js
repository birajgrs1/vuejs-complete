import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: [
            { id: 1, name: 'Alice Doe', email: 'alice.doe@.com' },
            { id: 2, name: 'Jane Doe', email: 'jane.doe@.com' },
            { id: 3, name: 'John Doe', email: 'john.doe@.com' },
            { id: 4, name: 'Bob Doe', email: 'bob.doe@.com' },
            { id: 5, name: 'Charlie Doe', email: 'charlie.doe@.com' }
        ]
    }),
    getters: {
        allUsers(state) {
            return state.users;
        },
        getUserById: (state) => (id) => {
            return state.users.find(user => user.id === id);
        },
        userNames(state) {
            return state.users.map(user => user.name);
        },
        filterUsersByDomain: (state) => (domain) => {
            return state.users.filter(user => user.email.endsWith(`@${domain}`));
        },
        activeUsers(state) {
            return state.users.filter(user => user.email.endsWith('@.com'));
        }
    },
    actions: {
        addUser(newUser) {
            if (this.users.some(user => user.id === newUser.id)) {
                console.error("User with this ID already exists.");
                return;
            }
            this.users.push(newUser);
        },
        deleteUser(id) {
            this.users = this.users.filter(user => user.id !== id);
        },
        updateUser(updatedUser) {
            const index = this.users.findIndex(user => user.id === updatedUser.id);
            if (index !== -1) {
                this.users[index] = updatedUser;
            } else {
                console.error("User not found.");
            }
        },
        replaceState(newState) {
            this.$state = newState;
        },
        patchState(patch) {
            this.users = this.users.map(user => {
                const updatedUser = patch.find(p => p.id === user.id);
                return updatedUser ? { ...user, ...updatedUser } : user;
            });
        },
        resetState() {
            this.$reset();
        }
    }
});
