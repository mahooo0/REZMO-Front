import Image from 'next/image';
import React from 'react';

export default function BG() {
    return (
        <div className=" absolute w-screen h-screen top-0  z-[-1]">
            <Image
                src="/images/ChefHatIcon.png"
                width={160}
                height={160}
                alt=""
                className=" fixed top-0"
            />
            <Image
                src="/images/vector.png"
                width={160}
                height={160}
                alt=""
                className="  absolute bottom-0 right-0"
            />
        </div>
    );
}
