import { useEffect, useState } from "react";
import "./App.css";
import { postsApi } from "../apiService";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await postsApi.get();
      if (response) setPosts(response);
    };

    fetchData();
  }, []);

  const handleAddPost = async () => {
    const response = await postsApi.post({
      title: "Shubham",
      author: "Shubham",
    });
    if (response) setPosts(response);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAddPost()}>Add</button>
    </>
  );
}

export default App;
