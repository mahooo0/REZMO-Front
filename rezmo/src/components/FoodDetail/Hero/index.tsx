import Image from 'next/image';
import React from 'react';

export default function HeroBunner() {
    return (
        <div>
            {' '}
            <div className=" p-4 ">
                <div className="flex items-center relative">
                    <button className="p-2 rounded-full bg-white/90">
                        <img src="/svg/Goback.svg" className="h-5 w-5" />
                    </button>
                    <h1 className=" text-[16px] font-medium text-center  w-full absolute top-[5px]   text-black drop-shadow-md">
                        Cafe City
                    </h1>
                </div>
                <div className="rounded-xl w-full aspect-[2/1] overflow-hidden">
                    <Image
                        src="/images/resturantbg.png"
                        width={362}
                        height={163}
                        alt="resturant name "
                        className="w-full object-cover"
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-[20px] font-semibold">Caesar Salad</h2>
                    <div className="flex items-center mt-1">
                        <span className="text-[20px] font-semibold text-[#FA583F]">
                            8 azn
                        </span>
                        <span className="text-[#3C3A34] line-through text-[20px] font-semibold ml-2">
                            12 azn
                        </span>
                        <div className="ml-auto bg-[#E9FBDA] text-[#469C05]  flex items-center px-2 py-1 rounded-[100px] gap-1">
                            <img src="/images/Halal.png" className="h-4 w-4" />
                            HALAL
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-base">Description</h3>
                    <p className="text-[#3C3A34] font-normal text-sm mt-1">
                        Crisp romaine, creamy Caesar dressing, garlic croutons,
                        and shaved Parmesan. A fresh, timeless classic.
                    </p>
                    <p className="text-[#3C3A34] font-normal text-sm mt-1">
                        Portion 250g
                    </p>
                </div>
                <div>
                    <h3 className="font-medium">Allergens</h3>
                    <div className="flex mt-2 gap-3 flex-wrap">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center px-4 py-2 h-8 bg-gray-100 rounded-full"
                            >
                                <span className="text-xs w-full flex flex-row items-center gap-1">
                                    <img
                                        src="/images/Halal.png"
                                        className="w-5 h-5 object-cover "
                                        alt=""
                                    />
                                    Mushroom
                                </span>
                            </div>
                        ))}
                        <div className="flex items-center justify-center px-2 py-2 h-8 bg-gray-100 rounded-full">
                            <img
                                src="/svg/info.svg"
                                className="w-5 h-5 object-cover "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
