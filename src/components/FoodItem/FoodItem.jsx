import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/Storecontext';
const FoodItem = ({ id, name, price, description, image }) => {

  // const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className='food-item-image' />
          {!cartItems[id]
          ? <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)}></img>
          : <div className="food-item-counter">
            <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem


/*        
        {!itemCount
          ? <img src={assets.add_icon_white} className='add' onClick={() => setItemCount(prev => prev + 1)}></img>
          : <div className="food-item-counter">
            <img src={assets.remove_icon_red} alt="" onClick={() => setItemCount(prev => prev - 1)} />
            <p>{itemCount}</p>
            <img src={assets.add_icon_green} alt="" onClick={() => setItemCount(prev => prev + 1)} />
          </div>
        }
*/