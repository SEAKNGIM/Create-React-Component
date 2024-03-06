import React from 'react'
import ProductPage from './ProductPage'
import FeedbackPage from './FeedbackPage'

const MainComponent = () => {
  return (
    <div className='container mx-auto py-5'>
      <ProductPage />
      <FeedbackPage/>
    </div>
  )
}

export default MainComponent