import { cn } from '@/utils/cn';
import React, { useEffect, useRef, useState } from 'react';

export default function Aside() {
    const [isOpen, setIsOpen] = useState(false);
    const asideRef = useRef<HTMLDivElement>(null);

    // Handle outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                asideRef.current &&
                !asideRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[46px] h-[46px] bg-[#F4F3F3] rounded-full flex justify-center items-center relative "
            >
                <img src="/svg/aside.svg" alt="Toggle Aside" />
            </button>

            <div
                ref={asideRef}
                className={cn(
                    'fixed top-0 left-0 h-full w-[80vw] bg-[#F4F3F3] transition-all duration-300 ease-in-out z-40',
                    isOpen
                        ? 'translate-x-0 opacity-100 pointer-events-auto'
                        : '-translate-x-full opacity-0 pointer-events-none'
                )}
            >
                <nav className="p-5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mb-5 bg-gray-300 p-2 rounded-lg"
                    >
                        Close
                    </button>
                    <ul className="flex flex-col gap-5 mt-5">
                        <li className="flex items-center gap-2 w-full bg-[#ccc9c9] p-3 rounded-2xl">
                            <span>Home</span>
                        </li>
                        <li className="flex items-center gap-2 w-full bg-[#ccc9c9] p-3 rounded-2xl">
                            <span>Menu</span>
                        </li>
                        <li className="flex items-center gap-2 w-full bg-[#ccc9c9] p-3 rounded-2xl">
                            <span>Orders</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
