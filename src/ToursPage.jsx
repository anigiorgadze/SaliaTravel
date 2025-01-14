import arrow from './assets/arrow-right.svg';
import { ToursData } from './Data'
import { Link } from 'react-router-dom';


function ToursPage() {
  return (
    <div className='tours__page'>
        <div className='background'>
            <h2>ტურები</h2>
            <div>
                <a href="/home">მთავარი</a>
                <img src={arrow} alt="" />
                <a href="#">ტურები</a>
            </div>
        </div>
        <div className='tours-content' >
                {ToursData.map(item => (
                    <div className='cards' key={item.id}>
                        <img src={item.img} alt={item.head} />
                        <h3 title={item.head}>{item.head}</h3>
                        <p>{item.includes}</p>
                        <Link className='btn' state={{ from: '/ToursPage' }} to={`/product/${item.id}`}><button>მეტი</button></Link>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default ToursPage