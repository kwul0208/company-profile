import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navBrand from '../assets/img/navBrand.png';
import phone from '../assets/icon/phone.png';
import lineNav from '../assets/icon/line-nav.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={navBrand} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i class={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu mobile' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links active-page'>
                            Our Services
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <ul className='nav-center'>
                            <li className='center-item'>
                                <Link to='/about' className='nav-links'>
                                    About
                                </Link>
                            </li>
                            <li className='center-item'>

                                <Link to='/blog' className='nav-links'>
                                    Blog&News
                                </Link>
                            </li>
                            <li className='center-item'>
                                <Link to='/contact' className='nav-links'>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </li>

                    <li className='nav-item btm'>
                        <Link to='/account' className='nav-links account'>
                            Account
                        </Link>
                        {click ? <br></br> : false}

                        <img src={lineNav} className='line-nav' />
                        <span className='block-telp'><img src={phone} class="icon-telp" />
                            +2349067322844 </span>
                    </li>
                </ul>
            </div>




        </div>
    )
}

export default Navbar;