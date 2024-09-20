import React from 'react';
import styled from 'styled-components';

const PostItemContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  width: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 0;
`;

const ReadMoreButton = styled.button`
  margin-top: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
`;

const PlaceholderImage = 'https://via.placeholder.com/150';

const PostItem = ({ post, onOpenModal, onDelete }) => {
  const MAX_CONTENT_LENGTH = 100;
  const truncatedContent =
    post.content.length > MAX_CONTENT_LENGTH
      ? `${post.content.substring(0, MAX_CONTENT_LENGTH)}...`
      : post.content;

  return (
    <PostItemContainer>
      <Image
        src={post.image ? post.image : PlaceholderImage}
        alt={post.title ? post.title : 'Imagem de postagem'}
      />
      <Content>
        <Title>{post.title}</Title>
        <p>{truncatedContent}</p>
        <div>
          {post.content.length > MAX_CONTENT_LENGTH && (
            <ReadMoreButton
              onClick={() => onOpenModal(post)}
              aria-label={`Leia mais sobre ${post.title}`}
            >
              Leia mais
            </ReadMoreButton>
          )}
          <DeleteButton
            onClick={() => onDelete(post.id)}
            aria-label={`Deletar postagem ${post.title}`}
          >
            Deletar
          </DeleteButton>
        </div>
      </Content>
    </PostItemContainer>
  );
};

export default PostItem;
