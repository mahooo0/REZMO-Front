import BG from '@/components/bg';
import BuskedHero from '@/components/Busked/Hero';
import ItemsList from '@/components/Busked/ItemsList';
import SubmitButton from '@/components/Busked/SubmitButton';
import Header from '@/components/Header';
import React from 'react';

export default function Basked_page() {
    return (
        <div className="relative h-screen  overflow-x-hidden ">
            <BG />
            <Header />
            <BuskedHero />
            <ItemsList />
            <SubmitButton />
        </div>
    );
}
