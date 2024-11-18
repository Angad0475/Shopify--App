import React,{useState} from 'react';
import './CSS/ShopCategory.scss';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../Redux/productSlice'; // Adjust this import based on your slice file
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import { CiFilter } from "react-icons/ci";
function ShopCategory(props) {
  const all_product = useSelector(selectAllProducts); // Get all products from Redux

  const [sortOrder,setSortOrder]=useState('default');

  const sortedProducts= [...all_product].filter(item=>item.category===props.category).sort((a,b)=>{
    if(sortOrder==='price-asc'){
      return a.new_price - b.new_price;
    }
    else if(sortOrder==='price-desc'){
      return b.new_price -a.new_price;
    }
    return 0;
  })

  const handleSortChange=(e)=>{
    setSortOrder(e.target.value)
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className="shopcategory-indexSort">
         <p className="product-count">
         <span>Showing 1-12</span> out of {sortedProducts.length} products</p>
        <div className="shopcategory-sort">
        <CiFilter className='filter'/>  <select value={sortOrder} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-asc">Price:Low to High </option>
              <option value ='price-desc'>Price: High to Low</option>
            </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
