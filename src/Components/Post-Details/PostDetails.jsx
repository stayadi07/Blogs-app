import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function PostDetails({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostDetails(postId);
  }, [postId]);

  const fetchPostDetails = async (postId) => {
    try {
      const response = await axios.get(`${API_URL}/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  return (
    <div className="container">
      <h1>Post Details</h1>
      {post ? (
        <>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
}

export default PostDetails;
