import BG from '@/components/bg';

import Header from '@/components/Header';
import PrepearingHero from '@/components/prepearing/hero';
import React from 'react';

export default function Basked_page() {
    return (
        <div className="relative h-screen  overflow-x-hidden ">
            <BG />
            <Header />
            <PrepearingHero />
        </div>
    );
}
