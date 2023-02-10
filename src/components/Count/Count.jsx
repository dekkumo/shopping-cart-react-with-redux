import React from 'react'
import { useDispatch } from 'react-redux'
import { changeValue, decrease, increase } from '../../store/cartSlice'
import './style.scss'

export const Count = ({count, id}) => {

  const dispatch = useDispatch()

  const increaseProduct = () => {
    dispatch(increase({id}))
  }

  const decreaseProduct = () => {
    dispatch(decrease({id}))
  }

  const changeValueProduct = (e) => {
    dispatch(changeValue({id, value: e}))
  }

  return (
    <div className="count">
      <div className="count__box">
        <input onChange={(e) => changeValueProduct(+e.target.value)} type="number" className="count__input" min="1" max="100" value={count} />
      </div>
      <div className="count__controls">
        <button 
          onClick={increaseProduct}
          type="button" 
          className="count__up"
        >
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button 
          onClick={decreaseProduct}
          type="button" 
          className="count__down"
        >
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  )
}
