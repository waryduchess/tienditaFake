const API_BASE_URL = 'https://fakestoreapi.com';

export const getProduct = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener el producto');
  }
  return response.json();
};

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Error al obtener los productos');
  }
  return response.json();
};