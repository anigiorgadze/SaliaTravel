// import React from 'react'
import { ToursData } from '../../Data'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import bus from '../../assets/bus.png'
// import bus2 from '../../assets/bus2.png'




function Tours() {
    useEffect(() => {
        gsap.fromTo('.bus', {
            x: '0vw',
            duration: 1,
        }, {
            x: '35vw',
            duration: 1,
            scrollTrigger: {
                trigger: '.bus',
                scrub: true,
            }
        })
        gsap.fromTo('.fade2', {
            y: 70,
            opacity: 0,

        },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: '.fade2',
                    start: "top 80%"

                }
            })
    }, [])


    return (
        <div className='tours'>
            <div className='tours-head'>
                <div style={{ overflow: 'hidden', marginBottom: '2rem', display: "flex", alignItems: "flex-end" }}>
                    <h2 className='fade2'>ტურები</h2>
                </div>
                <div className='bus-div'>
                    <img className='bus' src={bus} alt="" />
                    {/* <img src={bus2} alt="" /> */}
                </div>

            </div>
            <div className='tours-content' >
                {ToursData.map(item => (
                    <div className='cards' key={item.id}>
                        <img src={item.img} alt={item.head} />
                        <h3 title={item.head}>{item.head}</h3>
                        <p>{item.includes}</p>
                        <Link className='btn' state={{ from: '/' }} to={`/product/${item.id}`}><button>მეტი</button></Link>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Tours
