import Image from 'next/image';
import React from 'react';

export default function Resturant_Hero() {
    return (
        <section className="mt-3 flex flex-col p-5 ">
            <div className="flex flex-row gap-2">
                <img
                    src="/svg/location.svg"
                    className="w-[14px]  h-[14px]"
                    alt=""
                />
                <p className="text-[12px] font-medium">Fevvaraler meydanı 23</p>
            </div>
            <div className="w-full relative mt-3">
                <div className="rounded-xl w-full aspect-[2/1] overflow-hidden">
                    <Image
                        src="/images/resturantbg.png"
                        width={362}
                        height={163}
                        alt="resturant name "
                        className="w-full object-cover"
                    />
                </div>
                <div className=" absolute bg-black/40 w-full h-full top-0 rounded-xl flex flex-col items-center justify-between pt-5">
                    <p className="text-white text-[18px] font-medium ">
                        10:00- 23:00
                    </p>
                    <div className="w-full flex justify-center px-3 flex-col items-center translate-y-[18px] ">
                        <Image
                            src="/images/cafecity.png"
                            width={111}
                            height={111}
                            className="rounded-full w-[26%]    aspect-square border-2 border-[#F8FFAC] z-20"
                            alt=""
                        />
                        <div className="w-full  h-[74px] bg-white rounded-[20px] -mt-[46px] shadow-xl z-10 px-[18px] flex justify-between items-center ">
                            <div className="flex flex-col  justify-center items-center">
                                <div className="flex flex-row gap-1 items-center w-fit">
                                    <p className="text-[18px] font-semibold text-center">
                                        4.9
                                    </p>
                                    <img
                                        src="/svg/star.svg"
                                        className="w-[24px] aspect-square"
                                        alt=""
                                    />
                                </div>
                                <p className="text-[12px] font-semibold text-center text-[#FFB800]">
                                    (154) reviews{' '}
                                </p>
                            </div>

                            <div>
                                <img src="/svg/instagram.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
