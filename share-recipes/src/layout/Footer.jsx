import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t-8 text-center pt-6 pb-24 border-custom-main' >
      <div className='footer-tittle flex flex-col gap-3' >
      <div>
        <h1 className='text-3xl font-dmserif ' >Le`Ale</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex flex-col' >
        <h2>Quick Links</h2>
        <Link>Trending</Link>
        <Link>Categories</Link>
        <Link>Popular Chef</Link>
      </div>
      <div>
        <h2>About Our Website</h2>
        <Link>Faq</Link>
      </div>
      <div className='flex justify-center mt-4' >&#169; copyright by uhuy.ltd</div>
      </div>
    </div>
  )
}

export default Footer