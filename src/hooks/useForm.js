import { useState } from 'react';
import { validateTitle, validateContent, validateImageUrl } from '../utils/validators';

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Atualiza o estado do formulário com base na mudança do input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Redefine o formulário para o estado inicial
  const resetForm = () => {
    setFormState(initialState);
    setErrors({});
  };

  // Valida o formulário e retorna true se não houver erros
  const validateForm = () => {
    const errors = {};
    const titleError = validateTitle(formState.title);
    const contentError = validateContent(formState.content);
    const imageError = validateImageUrl(formState.image);

    if (titleError) errors.title = titleError;
    if (contentError) errors.content = contentError;
    if (imageError) errors.image = imageError;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    formState,
    errors,
    handleChange,
    resetForm,
    validateForm,
  };
};
