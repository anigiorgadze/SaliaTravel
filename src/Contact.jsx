
import arrow from './assets/arrow-right.svg'
import call from './assets/call-1.svg'
import location from './assets/location-dot2.svg'
import mail from './assets/mail-1.svg'
import btn from './assets/plane.svg'
// import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className='contact'>
            <div className='contact__bg'>
                <h2>საკონტაქტო</h2>
                <div>
                    <a href="/home">მთავარი</a>
                    <img src={arrow} alt="arrow" />
                    <p>საკონტაქტო</p>
                </div>
            </div>

            <div className='contact__main'>
                <h3>ჩვენი საკონტაქტო ინფორმაცია</h3>

                <div className='contact__info'>
                    <a href="https://www.google.com/maps/place/2+Giorgi+Leonidze+St,+T'bilisi/@41.6927389,44.7981132,17z/data=!3m1!4b1!4m6!3m5!1s0x40440cee48649a3f:0x825ebef640cfd9fc!8m2!3d41.6927349!4d44.8006881!16s%2Fg%2F11_txht4q?entry=ttu&g_ep=EgoyMDI1MDEwNi4wIKXMDSoASAFQAw%3D%3D" target='blank'>
                        <div className='contact__item'>
                            <div className='img__bg'><img src={location} alt="" /></div>
                            <div>
                                <h4>მისამართი:</h4>
                                <p>გ. ლეონიძის ქ. #2, თბილისი</p>
                            </div>
                        </div>
                    </a>

                    <a href="tel:+995557171706">
                        <div className='contact__item'>
                            <div className='img__bg'><img src={call} alt="" /></div>
                            <div>
                                <h4>ტელეფონი:</h4>
                                <p>+995 557 171 706</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzlZmbtZPPHKdRSncsqpqwkxDdkqZvdvJhhtgrKVjGWgmFBvfLPpGFRWmdPVjbjSnNdnC" target='blank'>
                        <div className='contact__item'>
                            <div className='img__bg'><img src={mail} alt="" /></div>
                            <div>
                                <h4>მეილი:</h4>
                                <p>lannasalia@gmail.com</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='form__bg'>
                <div className='user__info'>
                    <form>
                        <h3>დაგვიტოვეთ თქვენი საკონტაქტო ინფორმაცია</h3>
                        <div>
                            <input type="text" placeholder='სახელი' />
                            <input type="text" placeholder='ტელეფონი' />
                        </div>
                        <input type="text" placeholder='თემა' />
                        <textarea placeholder='დაგვიტოვეთ შეტყობინება...'></textarea>
                        <button>გაგზავნა <img src={btn} alt="" /></button>
                    </form>
                </div>
            </div>

            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41141563818724!2d44.800323319571824!3d41.69264627313263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cee48649a3f%3A0x825ebef640cfd9fc!2s2%20Giorgi%20Leonidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1736283176375!5m2!1sen!2sge"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Contact
