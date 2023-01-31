import React from 'react'
import './style.scss'

export const ButtonDelete = ({deleteProduct, id}) => {
  return (
    <button onClick={() => deleteProduct(id)} type="button">
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  )
}
