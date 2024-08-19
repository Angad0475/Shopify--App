import React from 'react';
import './CSS/ShopCategory.css';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../Redux/productSlice'; // Adjust this import based on your slice file
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

function ShopCategory(props) {
  const all_product = useSelector(selectAllProducts); // Get all products from Redux

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
            Sort by <img className='dropdown' src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
