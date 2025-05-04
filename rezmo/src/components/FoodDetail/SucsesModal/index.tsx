import { cn } from '@/utils/cn';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function SuccessModal() {
    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true); // Used to keep in DOM during animation

    // Auto-close after 3s
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => setIsVisible(false), 300); // Match animation duration
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={cn(
                'w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center z-[100] transition-opacity duration-300 bg-[#FF924540]',
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
        >
            <div
                className={cn(
                    'w-[90%] p-[22px] bg-white rounded-[20px] flex flex-col items-center justify-center gap-5 transition-all duration-300 transform',
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                )}
            >
                <Image width={76} height={76} alt="" src="/svg/sucses.svg" />
                <p className="text-[14px] font-medium text-center">
                    A new dish has been added to the cloche
                </p>
            </div>
        </div>
    );
}
