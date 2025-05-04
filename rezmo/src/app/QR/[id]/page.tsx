'use client';
import BG from '@/components/bg';
import CategorySwiper from '@/components/categorySwipper';
import Header from '@/components/Header';
import FoodMenu from '@/components/MenuList';
import Resturant_Hero from '@/components/ResturantHero';
import Image from 'next/image';
import React from 'react';

export default function Restoran() {
    return (
        <div className="relative h-screen  overflow-x-hidden ">
            <BG />
            <Header />
            <Resturant_Hero />
            <CategorySwiper />
            <FoodMenu />
        </div>
    );
}
