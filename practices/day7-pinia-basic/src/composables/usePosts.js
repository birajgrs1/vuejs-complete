import { usePostsStore } from "../store/posts";
export function usePosts() {
  const postsStore = usePostsStore();

  const loadPosts = async () => {
    await postsStore.fetchPosts();
  };

  return {
    posts: postsStore.posts,
    loading: postsStore.loading,
    error: postsStore.error,
    loadPosts,
  };
}
