// import pin from "./assets/pin.png"
// import mail from "./assets/mail.png"
// import phone from "./assets/telephone.png"

// import img1 from './assets/country/czech.jpg'
// import connect from './assets/country/connect.jpg'
// // import connect from './assets/country/drop.avif'
// import img2 from './assets/country/italy.webp'

// import { useEffect } from "react"
// import hoverEffect from "hover-effect";

// import spain from "./assets/country/spain.jpg"
// import egypt from "./assets/country/egypt.jpg"
// import turkey from "./assets/country/turkey.jpg"
// import italy from "./assets/country/italy.webp"
// import czech from "./assets/country/czech.jpg"
// import france from "./assets/country/france.webp"
// import india from "./assets/country/india.jpg"
// import thailand from "./assets/country/thailand.jpg"

// const imgList = [
//     {
//         id:1,
//         img: spain
//     },
//     {
//         id:2,
//         img: egypt
//     },
//     {
//         id:3,
//         img: turkey
//     },
//     {
//         id:4,
//         img: italy
//     },
//     {
//         id:5,
//         img: czech
//     },
//     {
//         id:6,
//         img: france
//     },
//     {
//         id:7,
//         img: india
//     },
//     {
//         id:8,
//         img: thailand
//     },
// ]

function Contact() {

    return (
        <div className="contact-container">
            {/* <div className="bg-slider">
                <div className="slider-track">
                    {
                        imgList.map(item => (
                            <img key={item.id} src={item.img} alt="image" />
                        ))
                    }
                </div>

                <div className="over-color">
                </div>
            </div> */}
            <div className="bg"></div>
            <div className="contact">
                <div className="head">
                    <h2>საკონტაქტო</h2>
                    <p><a href="/home">მთავარი</a> / საკონტაქტო</p>
                </div>

                <div className="contact-row">
                    <section>
                        <div className="row">
                            <div className="icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>
                            <div className="text">
                                <p>ტელეფონი:</p>
                                <a href="tel:+995557171706">+995 557 17 17 06</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="icon">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div className="text">
                                <p>მისამართი:</p>
                                <p>თბილისი, გიორგი ლეონიძის 2 </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="icon">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="text">
                                <p>იმეილი:</p>
                                <p>saliatravel@gmail.com</p>
                            </div>
                        </div>
                    </section>
                    <div>
                        <b>ან მოგვწერეთ სოციალურ ქსელებში:</b>
                        <div className="soc-network">
                            <a href="https://www.facebook.com/profile.php?id=100076234376477" target='blank'><ion-icon name="logo-facebook"></ion-icon>Facebook</a> 
                            <a href="https://www.instagram.com/saliatravel/" target='blank'><ion-icon name="logo-instagram"></ion-icon>Instagram</a>
                            <a href="https://www.tiktok.com/@saliatravel?_t=8sR5boVvKbd&_r=1" target='blank'><ion-icon name="logo-tiktok"></ion-icon>TikTok</a>  
                        </div>
                    </div>
                </div>
                <div className="layout">
                    <form>
                        <input type="text" placeholder="სახელი" />
                        <input type="email" name="" placeholder="eMmil" id="" />
                        <input type="text"placeholder="თემა" />
                        <textarea name="" placeholder="თექსტი" id=""></textarea>
                        <button>გაგზავნა</button>

                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.7475923490256!2d44.80018490103581!3d41.69272020285425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cee48649a3f%3A0x825ebef640cfd9fc!2s2%20Giorgi%20Leonidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1735634624945!5m2!1sen!2sge" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div> 
        </div>
    )
}

export default Contact
