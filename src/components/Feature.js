import React from 'react';
// img
import cPanel from '../assets/img/cpanel.png';
import imunity from '../assets/img/imunity.png';
import litespeed from '../assets/img/litespeed.png';
import softaculous from '../assets/img/softaculous.png';
import wordprss from '../assets/img/wordprss.png';
import cloudflare from '../assets/img/cloudflare.png';
import './Features.css';
// icon
import timer from '../assets/icon/time.png';
import blazing from '../assets/icon/blazing.png';
import certifitate from '../assets/icon/certifitate.png';
import support from '../assets/icon/support.png';

function Features() {
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='title' >True Cloud Web Hosting</h2>
                    <p className='desc-h2'>
                        True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.

                    </p>
                </div>
                <div className='col-6'>
                    <ul className='features'>
                        <li className='feature'>
                            <img src={cPanel} />
                        </li>
                        <li className='feature'>
                            <img src={imunity} />
                        </li>
                        <li className='feature'>
                            <img src={litespeed} />
                        </li>
                    </ul>
                    <ul className='features'>
                        <li className='feature'>
                            <img src={softaculous} />
                        </li>
                        <li className='feature'>
                            <img src={wordprss} />
                        </li>
                        <li className='feature'>
                            <img src={cloudflare} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <img src={timer} className='icon-feature' />
                    <h4 className='title-h4'>99.9% Uptime</h4>
                    <p className='desc-icon-features'>We Keep Your Web build Online 24x7x365.
                        Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                </div>
                <div className='col-3'>
                    <img src={blazing} className='icon-feature' />
                    <h4 className='title-h4'>99.9% Uptime</h4>
                    <p className='desc-icon-features'>We Keep Your Web build Online 24x7x365.
                        Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                </div>
                <div className='col-3'>
                    <img src={certifitate} className='icon-feature' />
                    <h4 className='title-h4'>99.9% Uptime</h4>
                    <p className='desc-icon-features'>We Keep Your Web build Online 24x7x365.
                        Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                </div>
                <div className='col-3'>
                    <img src={support} className='icon-feature' />
                    <h4 className='title-h4'>99.9% Uptime</h4>
                    <p className='desc-icon-features'>We Keep Your Web build Online 24x7x365.
                        Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                </div>
            </div>
        </>
    )
}

export default Features;