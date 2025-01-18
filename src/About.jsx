import React from 'react'
import arrow from './assets/arrow-right.svg';
import img1 from './assets/about/img1.jpg'
import img2 from './assets/about/img2.jpg'
import img3 from './assets/about/img3.jpg'
import icon from './assets/about/arrow.png'

const array = [
  {
    id: 1,
    title: 'გამოცდილება და პროფესიონალიზმი',
    description: 'ჩვენი გამოცდილი გუნდი და სანდო პარტნიორები უზრუნველყოფენ თქვენი მოგზაურობის თითოეული დეტალის მაღალ დონეზე ორგანიზებას.'
  },
  {
    id: 2,
    title: 'ინდივიდუალური მიდგომა',
    description: 'თქვენი სურვილები და პრიორიტეტები ჩვენი მთავარი ამოცანაა. ვქმნით ტურს, რომელიც სრულად შეესაბამება თქვენს ინტერესებსა და ბიუჯეტს.'
  },
  {
    id: 3,
    title: 'უსაფრთხოება და ნდობა',
    description: 'ჩვენი გუნდი მუდმივად ზრუნავს თქვენს უსაფრთხოებასა და კომფორტზე. ვთანამშრომლობთ მხოლოდ სანდო პარტნიორებთან და ვიყენებთ უახლეს ტექნოლოგიებს, რათა უზრუნველვყოთ მშვიდი და უსაფრთხო მოგზაურობა.'
  },
  {
    id: 4,
    title: 'დაუვიწყარი გამოცდილებები',
    description: 'ჩვენ არ გთავაზობთ მხოლოდ ტურს — ჩვენ გთავაზობთ ისტორიებს, შთაბეჭდილებებს და მომენტებს, რომლებიც სამუდამოდ დაგამახსოვრდებათ.'
  },
]
function About() {
  return (
    <div className='about'>
      <div className='background'>
        <h2>ჩვენ შესახებ</h2>
        <div>
          <a href="/home">მთავარი</a>
          <img src={arrow} alt="arrow" />
          <a href="#">ჩვენ შესახებ</a>
        </div>
      </div>

      <div className='main__content'>
        <div className='img__side'>
          <img className='img1' src={img1} alt="travel" />
          <img className='img2' src={img2} alt="travel" />
          <img className='img3' src={img3} alt="travel" />
        </div>
        <div className='text__side'>
          <h3>დაგეგმეთ ტური ჩვენთან ერთად</h3>
          <ul>
            {
              array.map(item => (
                <li key={item.id}>
                  
                  <div>
                    <h4><img src={icon} alt="icon" />{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>


    </div>
  )
}

export default About
