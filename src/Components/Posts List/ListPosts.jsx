import React, { useState, useEffect } from "react";
import axios from "axios";
import "./listPost.css";
import PostDetails from "../Post-Details/PostDetails";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const POSTS_PER_PAGE = 10;

function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?_start=${
          (currentPage - 1) * POSTS_PER_PAGE
        }&_limit=${POSTS_PER_PAGE}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePostItemClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="container">
      {selectedPostId ? (
        <PostDetails postId={selectedPostId} />
      ) : (
        <>
          <h1 className="list-of-posts">List of Posts</h1>

          <div className="post-list">
            {posts?.map((post) => (
              <div
                key={post?.id}
                className="post-item"
                onClick={() => handlePostItemClick(post?.id)}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
            <div className="pagination">
              <button
                onClick={handlePreviousClick}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button onClick={handleNextClick}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListPosts;
