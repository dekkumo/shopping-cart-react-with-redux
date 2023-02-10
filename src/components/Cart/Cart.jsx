import React, { useEffect, useState } from 'react'
import { CartFooter } from '../CartFooter/CartFooter'
import { CartHeader } from '../CartHeader/CartHeader'
import { Product } from '../Product/Product'
import { useSelector } from 'react-redux'

export const Cart = () => {

  const cart = useSelector(state => state.cart.cart)

  const [total, setTotal] = useState({ 
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal
    }, 0), 
    count: cart.reduce((prev, curr) => {
      return prev + curr.count
    }, 0)
  })


  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal
      }, 0), 
      count: cart.reduce((prev, curr) => {
        return prev + curr.count
      }, 0)
    })
  }, [cart])

  return (
  <section className="cart">
    <CartHeader />

    {
      cart.map(product => 
        <Product 
          key={product.id} 
          product={product}
        />
      )
    }

    <CartFooter 
      total={total}
    />
  </section>

  )
}
