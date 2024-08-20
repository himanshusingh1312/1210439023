import React from 'react'
import Product from './product'
const Navbar = (props) => {
  return (
    <div>

      <p>this is navbar</p>
      {props.product.map((p,i)=> {
        return <Product  product={p} key={i} />
      })
    }
    </div>
  )
}

export default Navbar
