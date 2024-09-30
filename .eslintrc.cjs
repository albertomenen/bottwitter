
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'  // Añadir 'prettier' al final para deshabilitar las reglas conflictivas de ESLint
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Define tus reglas personalizadas aquí si es necesario
  },
};

