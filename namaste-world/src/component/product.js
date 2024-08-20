import React from 'react'

const Product = (props) => {
  return (
    <div>
      <p>This is product page</p>
      <div className='row'>
        <div className='col-6'>
             <h2>{props.product.price}</h2>
        </div>
      </div>
    </div>

    
  )
}

export default Product
