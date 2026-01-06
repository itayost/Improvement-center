import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CtaStrip from '../components/CtaStrip';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <CtaStrip />
            <About />
            <Testimonials />
            <ContactForm />
        </>
    );
}
