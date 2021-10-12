import React, { useState } from 'react';
import ContactComp from '../components/ContactComp';
import Features from '../components/Feature';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import PackageCloude from '../components/PackageCloud';
import Testimoni from '../components/Testimoni';

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