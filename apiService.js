import axios from "axios";

const posts = axios.create({
  baseURL: "http://localhost:3000/posts",
  timeout: 100,
});

export const postsApi = {
  get: async () => {
    const response = await posts.get();
    let result;

    if (response.status == 200) {
      result = response.data;
    }
    return result;
  },

  post: async ({ title, author }) => {
    const response = await posts.post("", {
      title,
      author,
    });
    let result;

    if (response.status == 200) {
      result = response.data;
    }
    return result;
  },
};
