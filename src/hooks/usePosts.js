import { useState } from 'react';

// Hook para gerenciar postagens
export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  // Função para adicionar uma nova postagem
  const addPost = (post) => {
    // Verifica se a postagem já tem um ID
    if (!post.id) {
      console.error('A postagem deve ter um ID.');
      return;
    }
    setPosts(prevPosts => [...prevPosts, post]);
  };

  // Função para deletar uma postagem
  const deletePost = (id) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  // Função para obter uma postagem por ID
  const getPostById = (id) => {
    return posts.find(post => post.id === id);
  };

  return {
    posts,
    addPost,
    deletePost,
    getPostById,
  };
};
