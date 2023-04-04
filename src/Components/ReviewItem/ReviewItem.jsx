import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, HandleRemoveFromCart }) => {

    const { id, name, img, quantity, price } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Product quantity : <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={() => HandleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;