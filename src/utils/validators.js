
// Valida se o título está vazio ou excede 50 caracteres
export const validateTitle = (title) => {
  if (!title || title.trim().length === 0) {
    return 'O título não pode estar vazio.';
  }
  if (title.length > 50) {
    return 'O título deve ter no máximo 50 caracteres.';
  }
  return null;
};

// Valida o conteúdo da postagem
export const validateContent = (content) => {
  if (!content || content.trim().length === 0) {
    return 'O conteúdo não pode estar vazio.';
  }
  return null;
};

// Valida se a URL da imagem é válida
export const validateImageUrl = (url) => {
  if (!url) {
    return null; // URL é opcional
  }
  try {
    new URL(url); // Tenta criar uma URL para verificar se é válida
    return null;
  } catch (_) {
    return 'URL da imagem inválida.';
  }
};
