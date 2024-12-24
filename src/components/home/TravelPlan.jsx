import { plan } from "../../Data"

import build1 from '../../assets/buildings.png'
import build2 from '../../assets/cityscape.png'
import build3 from '../../assets/skyline.png'
import cloud1 from '../../assets/cloud.png'
import cloud2 from '../../assets/clouds.png'
import sun from '../../assets/sun.png'



function TravelPlan() {
    return (

        <div>
            <div className="plan-img">      
            </div>
            <div className='travel-plan'>
                <div className='travel-plan-head'>
                    <h2>რა არის სამოგზაუროდ საჭირო? </h2>
                    <p>სამოგზაუროდ ყველაზე მნიშვნელოვანი ეტაპები და მომზადების ძირითადი პუნქტები ასე გამოიყურება:</p>


                    <div className="travel-plan-img">
                        <img className="cloud" src={cloud1} alt="" />
                        <img className="clouds" src={cloud2} alt="" />
                        <img  className="sun" src={sun} alt="" />
                        



                        <img src={build3} alt="" />
                        <img src={build1} alt="" />
                        <img src={build2} alt="" />
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
                                            item.answer.map((elem, i)=> (
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
