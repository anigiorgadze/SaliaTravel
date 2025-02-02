import { plan } from "../../Data"

import build1 from '../../assets/buildings.png'
import build2 from '../../assets/cityscape.png'
import build3 from '../../assets/skyline.png'
import cloud1 from '../../assets/cloud.png'
import cloud2 from '../../assets/clouds.png'
import sun from '../../assets/sun.png'
import { useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function TravelPlan() {
    useEffect(() => {
        gsap.fromTo('.fade3', {
            y: 70,
            opacity: 0,

        },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: '.fade3',
                start: "top 80%"

            }
        })

        gsap.fromTo('.city',{
            y:300

        },
        {
            y:0,
            duration:0.5,
            stagger:0.1,
            scrollTrigger:{
                trigger:'.city',
            }
        })

    }
    , [])

    return (

        <div>
            <div className="plan-img">
            </div>
            <div className='travel-plan'>
                <div className='travel-plan-head'>
                    <div style={{ overflow: "hidden" }}>
                        <h2 className="fade3">რა არის სამოგზაუროდ საჭირო? </h2>
                    </div>
                    <p>სამოგზაუროდ ყველაზე მნიშვნელოვანი ეტაპები და მომზადების ძირითადი პუნქტები ასე გამოიყურება:</p>


                    <div className="travel-plan-img">
                        <img className="city" style={{zIndex:'99'}} src={build3} alt="" />
                        <img className="city" style={{zIndex:'99'}} src={build1} alt="" />
                        <img className="city" style={{zIndex:'99'}} src={build2} alt="" />
                        <img className="city cloud" src={cloud1} alt="" />
                        <img className="city clouds" src={cloud2} alt="" />
                        <img className="city sun" src={sun} alt="" />
                    </div>
                </div>

                <div className="plan">
                    {
                        plan.map(item => (

                            <div className="plan-item" key={item.id}>
                                <div className="side">
                                    <div className="circle"></div>
                                    <div className="col"></div>
                                </div>
                                <div className="stage">
                                    <h3>{item.head}</h3>
                                    <ul>
                                        {
                                            item.answer.map((elem, i) => (
                                                <li key={i}>
                                                    <b>{elem}</b> {item.fullAnswer[i]}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>

    )
}

export default TravelPlan
