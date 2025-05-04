import React, { useState } from 'react';

export default function QuantityControl() {
    const [count, setCount] = useState(1);
    const price = 12;

    return (
        <div className="flex items-center w-full p-5 gap-3 fixed bottom-0 z-20 ">
            {/* Quantity Box */}
            <div className="flex items-center bg-[#FFD9B3] rounded-lg px-3 py-2">
                {/* Decrease Button */}
                <button
                    onClick={() => setCount(Math.max(1, count - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFF4EB] text-orange-600 text-xl"
                >
                    –
                </button>

                {/* Quantity */}
                <span className="mx-4 text-orange-600 font-semibold">
                    {count}
                </span>

                {/* Increase Button */}
                <button
                    onClick={() => setCount(count + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFF4EB] text-orange-600 text-xl"
                >
                    +
                </button>
            </div>

            {/* Remove + Price Button */}
            <button className="flex items-center justify-between bg-red-600 text-white rounded-lg h-full px-4 py-3 w-full ">
                <span>Remove</span>
                <span>{price * count} azn</span>
            </button>
        </div>
    );
}
