import React, { useEffect, useState } from 'react'
import { CartFooter } from '../CartFooter/CartFooter'
import { CartHeader } from '../CartHeader/CartHeader'
import { Product } from '../Product/Product'
import data from '../../data'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../store/slice'

export const Cart = () => {

  const [cart, setCart] = useState(data)

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal
    }, 0), 
    count: cart.reduce((prev, curr) => {
      return prev + curr.count
    }, 0)
  })

  const dispatch = useDispatch()

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

  const removeProduct = () => {
    dispatch(deleteProduct())
  }

  // const deleteProduct = (id) => {
  //   const cartDelete = cart.filter(product => {
  //     return product.id !== id
  //   })
  //   setCart(cartDelete)
  // }

  const increase = (id) => {
    const productIncr = cart.map(product => {
      if (product.id === id) {
        return {
          ...product,
          count: ++product.count,
          priceTotal: ++product.count * product.price
        }
      }
      return product
    })
    setCart(productIncr)
  }

  const decrease = (id) => {
    const productDecr = cart.map(product => {
      if (product.id === id) {

        const newCount = product.count - 1 > 1 ? product.count - 1 : 1

        return {
          ...product,
          count: newCount,
          priceTotal: newCount * product.price,
        }
      }
      return product
    })
    setCart(productDecr)
  }

  const changeValue = (id, value) => {
    const productChange = cart.map(product => {
      if (product.id === id) {
        return {
          ...product,
          count: value,
          priceTotal: value * product.price
        }
      }
      return product
    })
    setCart(productChange)
  }

  return (
  <section className="cart">
    <CartHeader />

    {
      cart.map(product => 
        <Product 
          // key={product.id} 
          // product={product} 
          deleteProduct={removeProduct}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />
      )
    }

    <CartFooter 
      total={total}
    />
  </section>

  )
}
