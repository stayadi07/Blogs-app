import React, { useState } from "react";
import axios from "axios";
import "./createPost.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const MAX_DESCRIPTION_LENGTH = 1000;

function CreatePost() {
  const [postForm, setPostForm] = useState({
    title: "",
    description: "",
  });

  // State to manage success message display
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostForm({ ...postForm, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(API_URL, postForm);
      console.log("New Post:", response.data);
      setIsSuccess(true);
      setPostForm({ title: "", description: "" });

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      {isSuccess && (
        <p className="success-message">Post created successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title (Required)</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postForm.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description (Max 1000 characters)</label>
          <textarea
            id="description"
            name="description"
            value={postForm.description}
            onChange={handleInputChange}
            maxLength={MAX_DESCRIPTION_LENGTH}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
