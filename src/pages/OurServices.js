import React, { useState } from 'react';
import ContactComp from '../components/ourService/ContactComp';
import Features from '../components/ourService/Feature';
import Footer from '../components/ourService/Footer';
import Jumbotron from '../components/ourService/Jumbotron';
import PackageCloude from '../components/ourService/PackageCloud';
import Testimoni from '../components/ourService/Testimoni';

function OurServices() {
    return (
        <>
            <Jumbotron />
            <Features />
            <PackageCloude />
            <Testimoni />
            <ContactComp />
            <Footer />
        </>
    )
}

export default OurServices;