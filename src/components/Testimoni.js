import React from 'react';
import './Testimoni.css';
// icon
import quote from '../assets/icon/quote.png';
import quotemini from '../assets/icon/quotemini.png';
// img
import jpnl from '../assets/img/JPNL.png';
import korane from '../assets/img/korane.png';
import nadine from '../assets/img/nadine.png';
import leeveOn from '../assets/img/leeveOn.png';
import jrangoglases from '../assets/img/jrangoglases.png';
import crypto from '../assets/img/crypto.png';

function Testimoni() {
    return (
        <div className='testimoni'>
            <div className='row row-testimoni'>
                <div className='col-6 col-testimoni'>
                    <h2 className='title-testimoni '>
                        <img src={quote} className='quote' />
                        Real Stories from <b />
                        Real Customers
                    </h2>
                    <p className='subtitle-testimoni'>
                        Get inspired by these stories.
                    </p>
                    <div className='card-testimoni card-testimoni-left'>
                        <img src={crypto} className='img-card-testimoni' />
                        <img src='' className='quote-card-testimoni' />
                        <p className='desc-card-testimoni'><img src={quotemini} className='quoteMini' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        <p className='name-card-testimoni'>Floyd Miles</p>
                        <p className='subname-card-testimoni'>Vice President ,CLI</p>
                    </div>
                </div>
                <div className='col-6 col-testimoni'>
                    <div className='card-testimoni'>
                        <img src={jpnl} className='img-card-testimoni' />
                        <img src='' className='quote-card-testimoni' />
                        <p className='desc-card-testimoni'><img src={quotemini} className='quoteMini' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        <p className='name-card-testimoni'>Floyd Miles</p>
                        <p className='subname-card-testimoni'>Vice President ,CLI</p>
                    </div>
                    <div className='card-testimoni'>
                        <img src={leeveOn} className='img-card-testimoni' />
                        <img src='' className='quote-card-testimoni' />
                        <p className='desc-card-testimoni'><img src={quotemini} className='quoteMini' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        <p className='name-card-testimoni'>Floyd Miles</p>
                        <p className='subname-card-testimoni'>Vice President ,CLI</p>
                    </div>
                </div>
            </div>

            <div className='row row-customer'>
                <div className='col-6 col-customer'>
                    <h2 className='title-testimoni title-customer'>
                        We serve over 100<br />
                        Nigerian Websites
                    </h2>
                    <p className='subtitle-testimoni'>Connect LemonWares with your favourite tools that you <br /> use daily and keep things on track.</p>
                </div>
                <div className='col-6 col-customer col-customer-right'>
                    <ul className='customers'>
                        <li className='customer'>
                            <img src={jpnl} />
                        </li>
                        <li className='customer'>
                            <img src={korane} />
                        </li>
                        <li className='customer'>
                            <img src={nadine} />
                        </li>
                    </ul>
                    <ul className='customers'>
                        <li className='customer'>
                            <img src={leeveOn} />
                        </li>
                        <li className='customer'>
                            <img src={jrangoglases} />
                        </li>
                        <li className='customer'>
                            <img src={crypto} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimoni;