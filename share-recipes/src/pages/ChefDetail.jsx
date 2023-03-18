import React from 'react'
import { useLocation } from 'react-router-dom'

const ChefDetail = () => {

    const state = useLocation().state
    console.log(state)

  return (
    <div>ChefDetail</div>
  )
}

export default ChefDetail