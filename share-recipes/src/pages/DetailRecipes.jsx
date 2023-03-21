import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailRecipes = () => {
    const state = useLocation().state
    console.log(state)
  return (
    <div>
        halo bang
    </div>
  )
}

export default DetailRecipes