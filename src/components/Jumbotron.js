import React from 'react';
import './Jumbotron.css';
import imgJumb from '../assets/img/jumbotron.png';

function Jumbotron() {
    return (
        <div className='row' >
            <div className='col-6'>
                <ul className='nav-jumb'>
                    <li className='nav-iteme'>
                        <a href='' className="active">Hosting</a>
                    </li>
                    <li className='nav-iteme'>
                        <a href=''>Domain</a>
                    </li>
                    <li className='nav-iteme'>
                        <a href=''>SEO</a>
                    </li>
                    <li className='nav-iteme'>
                        <a href=''>Email</a>
                    </li>
                </ul>
                <hr />
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
            <div className='col-6 desk'>
                <img className='img-jumb' src={imgJumb} />
            </div>
        </div>
    )
}

export default Jumbotron;