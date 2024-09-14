import React,{useState} from 'react'
import './ProductDisplay.scss' 
import star_icon from '../../Assets/star_icon.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';

 


 function ProductDisplay(props) {
    const {product} = props;
    const dispatch = useDispatch();

    const [selectedSize,setSelectedSize]=useState(null);

    const handleAddToCart=()=>{
        if(selectedSize){
        dispatch(addToCart({ id:product.id, size: selectedSize}));
    }else{
        alert('please select a size befour adding to the cart.');
    }
};

    
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list">
               <img id='image'  src={product.image} alt=''/>
               <img id='image'  src={product.image} alt=''/>
               <img id='image'  src={product.image} alt=''/>
               <img id='image'  src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img id='main' className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img id='star'src={star_icon} alt=''/>
                <img id='star'src={star_icon} alt=''/>
                <img id='star'src={star_icon} alt=''/>
                <img id='star'src={star_icon} alt=''/>
                <img id='star'src={star_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
             
            </div>
            <div className="productdisplay-right-description">
               A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or a garment. 
            </div>
            <div className="productdisplay-right-sizes">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    {['S','M','L','XL','XXL'].map((size)=>(
                        <div key={size}
                        onClick={()=>setSelectedSize(size)}
                        className={selectedSize===size? 'size-option selected':'size-option'}>
                        {size}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleAddToCart}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>category :</span>Women, T-Shirt,Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
export default ProductDisplay;
