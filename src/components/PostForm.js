import React from 'react';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';

// Estilização dos componentes
const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #dc3545;
  margin: 0;
`;

// Componente PostForm
const PostForm = ({ onSubmit }) => {
  const { formState, errors, handleChange, resetForm, validateForm } = useForm({
    title: '',
    content: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formState);
      resetForm();
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título da postagem</label>
        <Input
          id="title"
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Título da postagem"
        />
        {errors.title && <ErrorText>{errors.title}</ErrorText>}

        <label htmlFor="content">Conteúdo da postagem</label>
        <TextArea
          id="content"
          name="content"
          value={formState.content}
          onChange={handleChange}
          placeholder="Conteúdo da postagem"
        />
        {errors.content && <ErrorText>{errors.content}</ErrorText>}

        <label htmlFor="image">URL da imagem (opcional)</label>
        <Input
          id="image"
          type="text"
          name="image"
          value={formState.image}
          onChange={handleChange}
          placeholder="URL da imagem (opcional)"
        />
        {errors.image && <ErrorText>{errors.image}</ErrorText>}

        <Button type="submit">Postar</Button>
      </form>
    </FormContainer>
  );
};

export default PostForm;
