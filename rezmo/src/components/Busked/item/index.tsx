import Image from 'next/image';
import React from 'react';

export default function BaskedItem({ bg }: { bg?: boolean }) {
    if (bg) {
        return (
            <div className="flex justify-between bg-[#FFF1E8] items-center w-full py-3 px-3 rounded-[20px] mt-2">
                {/* Left Section */}
                <div className="flex items-center gap-3 w-full justify-center">
                    {/* Quantity Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#FFF4EB] border border-[#FFD9B3] flex items-center justify-center text-orange-500 font-semibold">
                        1
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col w-[80%] px-2">
                        <h3 className="text-[16px] font-semibold leading-none">
                            Caesar Salad
                        </h3>
                        <div className="flex flex-row justify-between w-full">
                            <span className="text-[16px] font-semibold text-orange-500 leading-none mt-1">
                                12 azn
                            </span>
                            <p className="text-sm text-gray-500 mt-1 leading-tight">
                                No topping
                                <br />
                                No parmesan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                        src="/images/cafecity.png" // Update with your image path
                        alt="Caesar Salad"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center w-full py-3  ">
            {/* Left Section */}
            <div className="flex items-center gap-3 w-full justify-center">
                {/* Quantity Circle */}
                <div className="w-12 h-12 rounded-full bg-[#FFF4EB] border border-[#FFD9B3] flex items-center justify-center text-orange-500 font-semibold">
                    1
                </div>

                {/* Text Content */}
                <div className="flex flex-col w-[80%] px-2">
                    <h3 className="text-[16px] font-semibold leading-none">
                        Caesar Salad
                    </h3>
                    <div className="flex flex-row justify-between w-full">
                        <span className="text-[16px] font-semibold text-orange-500 leading-none mt-1">
                            12 azn
                        </span>
                        <p className="text-sm text-gray-500 mt-1 leading-tight">
                            No topping
                            <br />
                            No parmesan
                        </p>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                    src="/images/cafecity.png" // Update with your image path
                    alt="Caesar Salad"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
}
