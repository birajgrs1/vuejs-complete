import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (err) {
        this.error = 'Failed to fetch posts';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },


});
