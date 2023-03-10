import React from 'react'
import { ButtonDelete } from '../ButtonDelete/ButtonDelete'
import { Count } from '../Count/Count'
import './style.scss'
import priceFormatter from '../../utils/priceFormatter'

export const Product = ({product,increase}) => {

  const {img, title, priceTotal, count, id} = product

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">

        <Count
          count={count}
          id={id}
        />

      </div>
      <div className="product__price">
        {priceFormatter.format(priceTotal)} руб.
      </div>
      <div className="product__controls">

        <ButtonDelete 
          id={id}
        />

      </div>
    </section>
  )
}
