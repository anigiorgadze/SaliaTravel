import pin from "./assets/pin.png"
import mail from "./assets/mail.png"
import phone from "./assets/telephone.png"



function Contact() {


    return (
        <div className="contact">
            <div className="contact-content">

            <div className='background' >
                <h2>საკონტაქტო</h2>
            </div>
            <div className="grid">
                <div className="contact-row">
                    <div className="row">
                        <img src={phone} alt="phone" />
                        <p>+995 557 17 17 06</p>
                    </div>
                    <div className="row">
                        <img src={pin} alt="location" />
                        <p>2 Leonidze street Tbilisi, Georgia</p>
                    </div>
                    <div className="row">
                        <img src={mail} alt="mail" />
                        <p>info@saliatravel.com</p>
                    </div>
                </div>

                <div className="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.2186465900526!2d44.80052868276013!3d41.69279816770324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cee48649a3f%3A0x825ebef640cfd9fc!2s2%20Giorgi%20Leonidze%20St%2C%20T&#39;bilisi!5e1!3m2!1sen!2sge!4v1735118460861!5m2!1sen!2sge" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.872543131705!2d44.800378972518985!3d41.69290219683169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cee48649a3f%3A0x825ebef640cfd9fc!2s2%20Giorgi%20Leonidze%20St!5e0!3m2!1sen!2sge!4v1735122795496!5m2!1sen!2sge" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

            </div>
        </div>
    )
}

export default Contact
