import React from 'react'

function PortfolioItem() {
  return (
    <div className='portfolio-item'>
        <div className="img"></div>
        <div className="info">
            <h3>Item Title</h3>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href='/'>Url</a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem