import React, { useEffect, useState } from 'react'
import PortfolioItem from '../components/PortfolioItem'
import data from "../data/works.json"

function Portfolio() {
	const [items,setItems] = useState([]);
	useEffect(()=>{
		setItems(data.works)
	},[items])
	console.log(items);
	return (
		<div className='portfolio'>
			<div className="container">
				<div className="items">
					{items.map(item => (
						<PortfolioItem item={item} />
					))}
					{/* <PortfolioItem description={"Food App Using React"} title={"Food App"} url="https://food-app-sepia.vercel.app" image={"images/works/food-App.png"} /> */}
				</div>
			</div>
		</div>
	)
}

export default Portfolio