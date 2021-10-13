import React from 'react';
import './Footer.css';
// img
import brandFooter from '../../assets/img/brandFooter.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='row row-footer'>
                <div className='col-4 col-4-footer'>
                    <img src={brandFooter} className='brand-footer' />
                    <p className='desc-card-testimoni desc-footer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                </div>
                <div className='col-2-footer'>
                    <ul className='ul-footer'>
                        <li className='li-footer li-first'>
                            <p className='desc-card-testimoni footer-desc'>Service</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Domain</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Shared Hosting</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Cloud Hosting</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Private Hosting</p>
                        </li>
                    </ul>
                </div>
                <div className='col-2-footer'>
                    <ul className='ul-footer'>
                        <li className='li-footer li-first'>
                            <p className='desc-card-testimoni footer-desc'>Hosting</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Cheap Hosting</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Hosting Wordpress</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Email Hosting</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Hosting Unlimited</p>
                        </li>
                    </ul>
                </div>
                <div className='col-2-footer'>
                    <ul className='ul-footer'>
                        <li className='li-footer li-first'>
                            <p className='desc-card-testimoni footer-desc'>Company</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>About</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Career</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Contact Us</p>
                        </li>
                    </ul>
                </div>
                <div className='col-2-footer'>
                    <ul className='ul-footer'>
                        <li className='li-footer li-first'>
                            <p className='desc-card-testimoni footer-desc'>Help</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>FAQ</p>
                        </li>
                        <li className='li-footer'>
                            <p className='desc-card-testimoni footer-desc'>Help support</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row '>
                <p className='author'>
                    design by Jeremiah
                </p>
            </div>
        </div>
    )
}

export default Footer;