import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../store/cartSlice'
import './style.scss'

export const ButtonDelete = (id) => {

  const dispatch = useDispatch()

  const removeProduct = () => {
    dispatch(deleteProduct(id))
  }

  return (
    <button onClick={removeProduct} type="button">
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  )
}
