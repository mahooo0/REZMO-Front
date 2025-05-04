import BaskedItem from '@/components/Busked/item';
import Image from 'next/image';
import React from 'react';

export default function PrepearingHero() {
    return (
        <div className=" p-4  flex flex-col  items-center">
            <div className="flex items-center relative w-full">
                <button className="p-2 rounded-full bg-white/90">
                    <img src="/svg/Goback.svg" className="h-5 w-5" />
                </button>
                <h1 className=" text-[16px] font-medium text-center  w-full absolute top-[5px]   text-black drop-shadow-md">
                    Cafe City
                </h1>
            </div>
            <p className="text-base font-semibold">Your food is preparing</p>
            <div className="relative w-[128px] h-[128px] mt-6  flex justify-center items-center">
                <Image
                    src="/svg/prepearing.svg"
                    alt=""
                    width={128}
                    height={128}
                    className="absolute top-0"
                />
                <p className="z-20 text-white text-[18px] font-semibold">
                    20 min
                </p>
            </div>
            <BaskedItem bg />
            <BaskedItem bg />
            <BaskedItem bg />
            <BaskedItem bg />
        </div>
    );
}
