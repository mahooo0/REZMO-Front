import Image from 'next/image';
import React from 'react';

export default function BuskedHero() {
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
            <Image
                src="/svg/baked.svg"
                alt=""
                width={64}
                height={64}
                className="mt-6"
            />
            <div className="flex flex-row justify-between w-full mt-6">
                <p className="text-[16px] font-semibold">
                    What’s under the cloche
                </p>
                <button className="text-[#FF7717] border-none text-[16px] font-semibold">
                    + Add more
                </button>
            </div>
        </div>
    );
}
