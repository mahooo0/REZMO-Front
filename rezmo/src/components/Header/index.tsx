'use client';

import React from 'react';
import Aside from './Aside';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="w-full h-[46px] sticky top-5 z-50  flex flex-row items-center px-5 mt-5 justify-between">
            <div className="flex flex-row gap-[14px] items-center">
                <Aside />
                <Image
                    src="/images/logo.jpg"
                    alt="rezmo"
                    width={85}
                    height={19}
                    className="w-[85px] h-[19px]"
                />
            </div>
            <nav className="flex flex-row gap-[8px] items-center">
                <Link
                    href="/"
                    className="flex items-center p-[10px] bg-[#F4F3F3] rounded-full"
                >
                    <img src="/svg/baskedIcon.svg" alt="" />
                </Link>
                <Link
                    href="/"
                    className="flex items-center p-[10px] bg-[#F4F3F3] rounded-full"
                >
                    <img src="/svg/chat.svg" alt="" />
                </Link>{' '}
                <Link
                    href="/"
                    className="flex items-center p-[10px] bg-[#F4F3F3] rounded-full"
                >
                    <img src="/svg/chat.svg" alt="" />
                </Link>
            </nav>
        </div>
    );
}
