import React, { useState } from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import Modal from './Modal';

const PostListContainer = styled.div`
  margin-top: 2rem;
`;

const NoPostsMessage = styled.p`
  text-align: center;
  color: #888;
`;

const PostList = ({ posts, onDeletePost }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <PostListContainer>
      {posts.length === 0 ? (
        <NoPostsMessage>Nenhuma postagem encontrada.</NoPostsMessage>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onOpenModal={() => handleOpenModal(post)}
            onDelete={() => onDeletePost(post.id)}
          />
        ))
      )}

      {selectedPost && (
        <Modal onClose={handleCloseModal}>
          <h2 id="modal-title">{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
        </Modal>
      )}
    </PostListContainer>
  );
};

export default PostList;
