import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import './collection-item.style.scss';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className='collection-item'>
     <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
     <div className='collection-footer'>
       <span className='name'>{name}</span>
       <span className='price'>{price}</span>
     </div>
     <CustomButton inverted onClick={() => addItem(item)}> Add to cart</CustomButton>
    </div>
)}

const mapDispathToProps = dispatch => ({
  addItem: (item)=>dispatch(addItem(item))
})

export default connect(null, mapDispathToProps)(CollectionItem);
