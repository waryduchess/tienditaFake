import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Mostrando información del producto ID: {id}</p>
    </div>
  );
};

export default ProductDetail;