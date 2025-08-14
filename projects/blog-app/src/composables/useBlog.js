import { ref } from 'vue'

export function useBlog() {
  const posts = ref([
    {
      id: 1,
      title: 'My First Blog Post',
      excerpt: 'This is my first blog post in this amazing application',
      content: 'This is the full content of my first blog post...',
      date: new Date(),
      author: 'Admin'
    }
  ])

  const addPost = (newPost) => {
    posts.value.push({
      id: posts.value.length + 1,
      date: new Date(),
      ...newPost
    })
  }

  return {
    posts,
    addPost
  }
}