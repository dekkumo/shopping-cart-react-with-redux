import React from 'react'
import './style.scss'
import priceFormatter from '../../utils/priceFormatter'

export const CartFooter = ({total}) => {
  const {price, count} = total
  
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">
        {priceFormatter.format(price)} руб.
      </div>
    </footer>
  )
}
