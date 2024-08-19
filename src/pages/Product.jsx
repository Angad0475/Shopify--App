import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../Redux/productSlice'; // Adjust the import based on your slice location
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function Product() {
  const all_product = useSelector(selectAllProducts); // Get all products from Redux
  const { productId } = useParams(); // Get the product ID from the URL
  const product = all_product.find((e) => e.id === Number(productId)); // Find the specific product

  return (
    <div>
      {product ? (
        <>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          <RelatedProducts />
        </>
      ) : (
        <p>Product not found</p> // Handle the case where the product is not found
      )}
    </div>
  );
}

export default Product;
