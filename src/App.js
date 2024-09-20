import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import styled from 'styled-components';

// Estilização do contêiner principal
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <AppContainer>
      <Header />
      <Banner />
      <PostForm onSubmit={addPost} />
      <PostList posts={posts} onDeletePost={deletePost} />
    </AppContainer>
  );
};

export default App;
