import React from 'react';
import './ContactComp.css';
import lb from '../../assets/icon/lb.png';
import t from '../../assets/icon/t.png';
import rb from '../../assets/icon/rb.png';

function ContactComp() {
    return (
        <>
            <img src={lb} className='lb' />
            <img src={t} className='t' />
            <img src={rb} className='rb' />
            <div className='contactComp'>
                <h1 className='title-contactComp'>We're here to make your <br /> website awesome.</h1>
                <button className='btn btn-danger btn-contactComp'>Get in touch with us</button>
            </div>
        </>
    )
}

export default ContactComp;
