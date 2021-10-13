import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navBrand from '../../assets/img/navBrand.png';
import phone from '../../assets/icon/phone.png';
import lineNav from '../../assets/icon/line-nav.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [mobile, stMobile] = useState(false);

    const handleClick = () => setClick(!click);

    const navScroll = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', navScroll);

    return (
        <>
            <div className={'nav-scroll'}>
                <div className='row row-sn'>
                    <div className=''>
                        <Link to='/' className='navbar-logo-sn'>
                            <img src={navBrand} className='navBrand' />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i class={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                    <div className={click ? 'links-nav2-on' : 'links-nav2'}>
                        <div className='col-link col-2 col-2sn'>
                            <ul className='ul-sn '>
                                <li className='li-sn-2 ln ourService'>
                                    <Link to='/' className='nav-links-nav2 nav-links active-page'>
                                        Our Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-link col-4 col-4sn'>
                            <ul className='ul-sn'>
                                <li className='li-sn-4-center ln'>
                                    <Link to='/about' className='nav-links nav-links-nav2'>
                                        About
                                    </Link>
                                </li>
                                <li className='li-sn-4-center ln'>

                                    <Link to='/blog' className='nav-links nav-links-nav2'>
                                        Blog&News
                                    </Link>
                                </li>
                                <li className='li-sn-4-center ln'>
                                    <Link to='/contact' className='nav-links nav-links-nav2'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-link col-4 col-4sn'>
                            <ul className='ul-sn'>
                                <li className='li-sn-4-right ln'>
                                    <Link to='/account' className='nav-links nav-links-nav2 account'>
                                        Login
                                    </Link>
                                </li>
                                <li className='li-sn-4-right ln'>
                                    <img src={lineNav} className='line-nav' />

                                </li>
                                <li className='li-sn-4-right ln inline-telp'>
                                    <span className='nav-links-nav2 block-telp'><img src={phone} class="icon-telp" />
                                        +2349067322844 </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className={scroll ? 'nav-scroll-on' : 'nav-scroll-off'}>
                <div className='row row-sn'>
                    <div className=''>
                        <Link to='/' className='navbar-logo-sn'>
                            <img src={navBrand} className='navBrand' />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i class={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                    </div>
                    <div className={click ? 'links-nav2-on' : 'links-nav2'}>
                        <div className='col-link col-2 col-2sn'>
                            <ul className='ul-sn '>
                                <li className='li-sn-2 ln ourService'>
                                    <Link to='/' className='nav-links-nav2 nav-links active-page'>
                                        Our Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-link col-4 col-4sn'>
                            <ul className='ul-sn'>
                                <li className='li-sn-4-center ln'>
                                    <Link to='/about' className='nav-links nav-links-nav2'>
                                        About
                                    </Link>
                                </li>
                                <li className='li-sn-4-center ln'>

                                    <Link to='/blog' className='nav-links nav-links-nav2'>
                                        Blog&News
                                    </Link>
                                </li>
                                <li className='li-sn-4-center ln'>
                                    <Link to='/contact' className='nav-links nav-links-nav2'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-link col-4 col-4sn'>
                            <ul className='ul-sn'>
                                <li className='li-sn-4-right ln'>
                                    <Link to='/account' className='nav-links nav-links-nav2 account'>
                                        Account
                                    </Link>
                                </li>
                                <li className='li-sn-4-right ln'>
                                    <img src={lineNav} className='line-nav' />

                                </li>
                                <li className='li-sn-4-right ln inline-telp'>
                                    <span className='nav-links-nav2 block-telp'><img src={phone} class="icon-telp" />
                                        +2349067322844 </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;