import React from 'react';
import { useParams } from 'react-router-dom';
import { ToursData } from './Data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
    const [openIndexes, setOpenIndexes] = useState([]); // მასივი გახსნილი ელემენტების ინდექსებისათვის
    
    const toggleText = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index)); // თუ უკვე გახსნილია, ამოიღებს ინდექსს
        } else {
            setOpenIndexes([...openIndexes, index]); // დაამატებს ინდექსს გახსნილების სიაში
        }
    };

    const { id } = useParams();
    const product = ToursData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className='product-details'>
            <div className='background' style={{
                background: ` linear-gradient(#00000086,hsla(184, 68.90%, 42.90%, 0.64)),url(${product.img}) no-repeat center center / cover`,
                height: "30dvh",
            }}>
                <h2>{product.head}</h2>
            </div>
            <div className='grid'>
                <div>
                    <p className='paragraph-map'>{product.includes}</p>
                    <div className='days'>
                        {product.details[0].day.map((item, index) => (
                            <div className='days-item' key={index}>
                                <div onClick={() => toggleText(index)} className='head'>
                                    <h4>{item.head}</h4>

                                    <div className={openIndexes.includes(index) ? "head-icon active" : "head-icon"}>
                                        <ion-icon name={"add-outline"}></ion-icon>
                                    </div>
                                </div>
                                <p className={openIndexes.includes(index) ? "days-paragraph active" : "days-paragraph"}>
                                    {item.paragraph}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <ul className='in-price'>
                        <h4>ფასში შედის:</h4>
                        {product.details[1].inPrice.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <ul className='additon-info'>
                        <h4>დამატებითი ექსკურსიები (არ შედის ღირებულებაში):</h4>
                        {product.details[2].additionTours.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <ul className='must-pay'>
                        <h4>აუცილებლად გადასახდელი:</h4>
                        {product.details[3].mustPay.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <button><Link className='back-btn' to="/">← უკან დაბრუნება</Link></button>
        </div>
    );
}

export default ProductDetails;
