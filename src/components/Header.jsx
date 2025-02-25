import {useState} from 'react';
import logo from '../assets/logo.png'
import decor from '../assets/bg-16.png'

import fb from '../assets/icon/fb.png'
import insta from '../assets/icon/insta.png'
import tiktok from '../assets/icon/tiktok.png'



function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='header'>
            <div className='header-content'>
                <a href="/home"> <img src={logo} className='logo' alt="" /></a>
                <nav className={isOpen ? 'nav-bar active' : 'nav-bar'}>
                    <ul>
                        <li><a href="/Home">მთავარი</a></li>
                        <li><a href="/About">ჩვენს შესახებ</a></li>
                        <li><a href="/ToursPage">ტურები</a></li>
                        <li><a href="/Contact">საკონტაქტო</a></li>
                    </ul>
                    <ul className='menu-additon-info'>
                        <li><ion-icon name="location-outline"></ion-icon>2 Leonidze street Tbilisi, Georgia</li>
                        <li><ion-icon name="call-outline"></ion-icon>+995 557 17 17 06</li>
                        <li className='icons'>
                            <a href="https://www.facebook.com/profile.php?id=100076234376477" target='blank'><img src={fb} alt="fb" /></a> 
                            <a href="https://www.instagram.com/saliatravel/" target='blank'><img src={insta} alt="insta" /></a>
                            <a href="https://www.tiktok.com/@saliatravel?_t=8sR5boVvKbd&_r=1" target='blank'><img src={tiktok} alt="tiktok" /></a>
                        </li>
                    </ul>
                </nav>
                <div className='burger' onClick={toggleMenu}>
                    <div className={isOpen ? 'line line1 active' : 'line'}></div>
                    <div className={isOpen ? 'line line2 active' : 'line line2'}></div>
                    <div className={isOpen ? 'line line3 active' : 'line'}></div>
                </div>
            </div>
            <div className='decor-header'>
                <img  src={decor} alt="" />
                <div className='space'> </div>
            </div>
        </div>
    )
}

export default Header