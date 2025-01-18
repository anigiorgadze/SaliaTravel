// import React from 'react'
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import arrow from "./assets/arrow-right.svg";
import img1 from "./assets/about/img1.jpg";
import img2 from "./assets/about/img2.jpg";
import img3 from "./assets/about/img3.jpg";
import icon from "./assets/about/arrow.png";

import barsa from "./assets/insta/barsa.jpg";
import antalya from "./assets/insta/antalya.jpg";
import creta from "./assets/insta/creta.jpg";
import cruise from "./assets/insta/cruise.jpg";
import dive from "./assets/insta/dive.jpg";
import milan from "./assets/insta/milan.jpg";
import viena from "./assets/insta/viena.jpg";
import switz from "./assets/insta/switz.webp";

const array = [
  {
    id: 1,
    title: "გამოცდილება და პროფესიონალიზმი",
    description:
      "ჩვენი გამოცდილი გუნდი და სანდო პარტნიორები უზრუნველყოფენ თქვენი მოგზაურობის თითოეული დეტალის მაღალ დონეზე ორგანიზებას.",
  },
  {
    id: 2,
    title: "ინდივიდუალური მიდგომა",
    description:
      "თქვენი სურვილები და პრიორიტეტები ჩვენი მთავარი ამოცანაა. ვქმნით ტურს, რომელიც სრულად შეესაბამება თქვენს ინტერესებსა და ბიუჯეტს.",
  },
  {
    id: 3,
    title: "უსაფრთხოება და ნდობა",
    description:
      "ჩვენი გუნდი მუდმივად ზრუნავს თქვენს უსაფრთხოებასა და კომფორტზე. ვთანამშრომლობთ მხოლოდ სანდო პარტნიორებთან და ვიყენებთ უახლეს ტექნოლოგიებს, რათა უზრუნველვყოთ მშვიდი და უსაფრთხო მოგზაურობა.",
  },
  {
    id: 4,
    title: "დაუვიწყარი გამოცდილებები",
    description:
      "ჩვენ არ გთავაზობთ მხოლოდ ტურს — ჩვენ გთავაზობთ ისტორიებს, შთაბეჭდილებებს და მომენტებს, რომლებიც სამუდამოდ დაგამახსოვრდებათ.",
  },
];

const imgArr = [
  {
    id: 1,
    img: barsa,
    link: "https://www.instagram.com/p/DC2BYyLRXYL/"
  }, 
  {
    id: 2,
    img: antalya,
    link: "https://www.instagram.com/p/DE7QuyrxWgZ/"
  }, 
  {
    id: 3,
    img: creta,
    link: "https://www.instagram.com/p/DEw5Nmvxk4R/"
  }, 
  {
    id: 4,
    img: cruise,
    link: "https://www.instagram.com/p/DE4a94YRZ0P/"
  }, 
  {
    id: 5,
    img: dive,
    link: "https://www.instagram.com/p/DEe85i-RrGo/"
  }, 
  {
    id: 6,
    img: milan,
    link: "https://www.instagram.com/p/DEw1o-YRCOa/"
  }, 
  {
    id: 1,
    img: viena,
    link: "https://instagram.com/p/DD9Pe5WRw_L/"
  }, 
  {
    id: 7,
    img: switz,
    link: "https://www.instagram.com/p/DDbxouBxyuu/"
  }, 
]


function About() {
  const swiperRef = useRef(null);
  const changeRef = useRef(null);

  const [slidesToShow, setSlidesToShow] = useState(4); // Default value

  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1.2); // For mobile devices
    } else if (window.innerWidth < 1500) {
      setSlidesToShow(2.2); // For tablets
    } else {
      setSlidesToShow(4.3); // For larger screens
    }
  };
  useEffect(() => {
    updateSlidesToShow(); // Update on mount
    window.addEventListener("resize", updateSlidesToShow); // Update on resize
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const [hover, setHover] = useState(null);

  return (
    <div className="about">
      <div className="background">
        <h2>ჩვენ შესახებ</h2>
        <div>
          <a href="/home">მთავარი</a>
          <img src={arrow} alt="arrow" />
          <a href="#">ჩვენ შესახებ</a>
        </div>
      </div>

      <div className="main__content">
        <div className="img__side">
          <div className="img__box">
            <img className="img1" src={img1} alt="travel" />
            <img className="img2" src={img2} alt="travel" />
            <img className="img3" src={img3} alt="travel" />
          </div>
        </div>
        <div className="text__side">
          <h3>დაგეგმეთ ტური ჩვენთან ერთად</h3>
          <ul>
            {array.map((item) => (
              <li key={item.id}>
                <div>
                  <h4>
                    <img src={icon} alt="icon" />
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="swiper__insta" ref={swiperRef}>
        <Swiper
          className="insta-slide"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true, enabled: false }}
          scrollbar={{ draggable: true, el: ".swiper-pagination" }}
          spaceBetween={20}
          speed={2000}
          // centeredSlides={true}
          slidesPerView={slidesToShow}
          onSwiper={(swiper) => (changeRef.current = swiper)}
        >
          {imgArr.map((item) => (
            <SwiperSlide className="insta-item" key={item.id}>
              <a href={item.link} target="blank">
                <ion-icon name="logo-instagram"></ion-icon>
                <div
                  className="item"
                  style={{
                    background: hover === item.id ? `linear-gradient(hsla(0, 0.00%, 0.00%, 0.44),hsla(0, 0.00%, 0.00%, 0.64)), url(${item.img}) no-repeat center center / cover` : `url(${item.img})no-repeat center center / cover`,
                  }}
                  onMouseEnter={() => setHover(item.id)}
                  onMouseLeave={() => setHover(null)}
                >
                </div>
              </a>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination"></div>
        </Swiper>
        {/* <div className="arr">
          <button onClick={() => changeRef.current.slidePrev()}><ion-icon name="chevron-back-outline"></ion-icon></button>
          <button onClick={() => changeRef.current.slideNext()}><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div> */}
      </div>
    </div>
  );
}

export default About;
