'use client';
import BG from '@/components/bg';
import QuantityControl from '@/components/FoodDetail/BuskedButtons';
import CustomizeSection from '@/components/FoodDetail/Custamize';
import ExtraSection from '@/components/FoodDetail/extraSection';
import HeroBunner from '@/components/FoodDetail/Hero';
import SucsesModal from '@/components/FoodDetail/SucsesModal';
import Header from '@/components/Header';

import React from 'react';

export default function Food_Detail() {
    return (
        <div className="relative h-screen w-full  overflow-x-hidden ">
            <BG />
            <Header />
            <HeroBunner />
            <CustomizeSection />
            <ExtraSection />
            <QuantityControl />
            <SucsesModal />
        </div>
    );
}
