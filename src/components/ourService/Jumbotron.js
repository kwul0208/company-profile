import React, { useState } from 'react';
import './Jumbotron.css';
import imgJumb from '../../assets/img/jumbotron.png';

function Jumbotron() {
    const [Hosting, setHosting] = useState(true);
    const [Domain, setDomain] = useState(false);
    const [Seo, setSeo] = useState(false);
    const [Email, setEmail] = useState(false);

    function clickH() {
        setHosting(true);
        setDomain(false);
        setSeo(false);
        setEmail(false);

    }

    function clickD() {
        setDomain(true);
        setHosting(false);
        setSeo(false);
        setEmail(false);
    }

    function clickS() {
        setSeo(true);
        setDomain(false);
        setHosting(false);
        setEmail(false);
    }

    function clickE() {
        setEmail(true);
        setSeo(false);
        setDomain(false);
        setHosting(false);
    }

    return (
        <div className='row row-jumbotron' >
            <div className='col-6'>
                <ul className='nav-jumb'>
                    <li className='nav-iteme'>
                        <a className={Hosting ? 'active' : ''} onClick={clickH}>Hosting</a>
                    </li>
                    <li className='nav-iteme'>
                        <a className={Domain ? 'active' : ''} onClick={clickD} >Domain</a>
                    </li>
                    <li className='nav-iteme'>
                        <a className={Seo ? 'active' : ''} onClick={clickS} >SEO</a>
                    </li>
                    <li className='nav-iteme'>
                        <a className={Email ? 'active' : ''} onClick={clickE} >Email</a>
                    </li>
                </ul>
                <hr />

                <div style={Hosting ? { display: '' } : { display: 'none' }} className='hosting'>
                    <h1>Premium Web <br />
                        Hosting For Your <br className='br-mobile' />
                        Website
                    </h1>
                    <img className='img-jumb mobile' src={imgJumb} />

                    <p className='desc-jumb'>
                        Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.
                    </p>
                    <button className='btn btn-danger'>Create an Account</button>
                    <button className=' btn btn-outline'>Choose Your Plan</button>
                </div>

                <div style={Domain ? { display: '' } : { display: 'none' }} className='domain'>
                    <h1>Premium Web <br />
                        Domain For Your <br className='br-mobile' />
                        Website
                    </h1>
                    <img className='img-jumb mobile' src={imgJumb} />

                    <p className='desc-jumb'>
                        Blazing fast web Domain for individuals and businesses of all sizes backed by 24x7x365 Support.
                    </p>
                    <button className='btn btn-danger'>Create an Account</button>
                    <button className=' btn btn-outline'>Choose Your Plan</button>
                </div>

                <div style={Email ? { display: '' } : { display: 'none' }} className='email'>
                    <h1>Premium Web <br />
                        Email For Your <br className='br-mobile' />
                        Website
                    </h1>
                    <img className='img-jumb mobile' src={imgJumb} />

                    <p className='desc-jumb'>
                        Blazing fast web Email for individuals and businesses of all sizes backed by 24x7x365 Support.
                    </p>
                    <button className='btn btn-danger'>Create an Account</button>
                    <button className=' btn btn-outline'>Choose Your Plan</button>
                </div>

                <div style={Seo ? { display: '' } : { display: 'none' }} className='seo'>
                    <h1>Premium Web <br />
                        Seo For Your <br className='br-mobile' />
                        Website
                    </h1>
                    <img className='img-jumb mobile' src={imgJumb} />

                    <p className='desc-jumb'>
                        Blazing fast web Seo for individuals and businesses of all sizes backed by 24x7x365 Support.
                    </p>
                    <button className='btn btn-danger'>Create an Account</button>
                    <button className=' btn btn-outline'>Choose Your Plan</button>
                </div>

            </div>
            <div className='col-6 desk'>
                <img className='img-jumb' src={imgJumb} />
            </div>
        </div >
    )
}

export default Jumbotron;