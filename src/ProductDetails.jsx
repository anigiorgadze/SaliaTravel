import React from 'react'
import { useParams } from 'react-router-dom';
import { ToursData } from './Data';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const product = ToursData.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;

    }

    console.log(product.details[0].day.map(item => item.head))
    return (
        <div style={{ margin: '10rem 5%' }}>
            <button><Link to="/">← უკან დაბრუნება</Link></button>
            <h1>{product.head}</h1>
            <p>{product.includes}</p>

            <div>
                {
                    product.details[0].day.map(item =>
                    <div>
                        <h4>{item.head}</h4>
                        <p>{item.paragraph}</p>
                    </div> )


                }

            </div>


            <ul>
                <h4>ფასში შედის:</h4>
                {
                    product.details[1].inPrice.map(item =>
                    <li>{item}</li>
                   )
                }
            </ul>

            <ul>
                <h4>დამატებითი ექსკურსიები (არ შედის ღირებულებაში):</h4>
                {
                    product.details[2].additionTours.map(item =>
                    <li>{item}</li>
                   )
                }
            </ul>

            <ul>
                <h4>აუცილებლად გადასახდელი:</h4>
                {
                    product.details[3].mustPay.map(item =>
                    <li>{item}</li>
                   )
                }
            </ul>


            {/* <img src={product.img} alt="" /> */}
        </div>
    )
}

export default ProductDetails
