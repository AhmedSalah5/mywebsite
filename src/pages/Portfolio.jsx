import React from 'react'
import PortfolioItem from '../components/PortfolioItem'

function Portfolio() {
	return (
		<div className='portfolio'>
			<div className="container">
				<div className="items">
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
				</div>
			</div>
		</div>
	)
}

export default Portfolio