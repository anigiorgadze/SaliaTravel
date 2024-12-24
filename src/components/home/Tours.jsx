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
        // const tl = gsap.timeline()
        // tl.fromTo('.bus',
        //     {
        //         x: "0%"
        //     },
        //     {
        //         x: "400%",
        //         duration:2,
        //         repeat:-1,
        //         yoyo:true,

        //     })
        //     .to('.bus',{
        //         x:'0',
        //         // scaleX: -1,
        //         duration:2,
        //         repeat:-1,
        //         yoyo:true,
        //     })

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
    })
    return (
        <div className='tours'>
            <div className='tours-head'>
                <h2>ტურები</h2>
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
                        <button><Link className='btn' to={`/product/${item.id}`}>მეტი</Link></button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Tours
