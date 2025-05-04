'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn'; // Your class merge helper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const categories = [
    { name: 'Salad', img: '/images/cafecity.png' },
    { name: 'Soup', img: '/images/cafecity.png' },
    { name: 'Main Course', img: '/images/cafecity.png' },
    { name: 'Dessert', img: '/images/cafecity.png' },
    { name: 'Drinks', img: '/images/cafecity.png' },
];

export default function CategorySwiper() {
    const [selected, setSelected] = useState('Salad');

    return (
        <div className="w-full mt-[20px] ">
            <Swiper
                spaceBetween={12}
                slidesPerView="auto"
                className="pb-2 !pl-5"
            >
                {categories.map((cat) => (
                    <SwiperSlide key={cat.name} className="!w-auto">
                        <button
                            onClick={() => setSelected(cat.name)}
                            className={cn(
                                'flex flex-row items-center gap-2 px-2 py-1 flex-nowrap rounded-[20px] transition-colors',
                                selected === cat.name
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-[#F5F5F5] text-black'
                            )}
                        >
                            <Image
                                src={cat.img}
                                alt={cat.name}
                                width={30}
                                height={30}
                                className="rounded-full object-cover"
                            />
                            <span className="text-sm font-medium text-nowrap whitespace-nowrap">
                                {cat.name}
                            </span>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
