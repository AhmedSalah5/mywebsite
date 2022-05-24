import {FaLink} from 'react-icons/fa'

function PortfolioItem({item}) {
  return (
    <div className='portfolio-item'>
        <div className="img">
          <img style={{width:'100%'}} src={item.image} alt="works" />
        </div>
        <div className="info">
            <h3>{item.title}</h3>
            <div>
                <p>{item.description}</p>
                <a href={item.url} rel="noreferrer" target="_blank">Site Link <FaLink/></a>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem