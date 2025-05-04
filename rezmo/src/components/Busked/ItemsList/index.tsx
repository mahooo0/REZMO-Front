import React from 'react';
import BaskedItem from '../item';

export default function ItemsList() {
    return (
        <div className="px-3 mb-[100px]">
            {' '}
            <div className="mt-[26px] w-full">
                {Array.from({ length: 6 }, (_, i) => (
                    <BaskedItem key={i} />
                ))}
            </div>
            <div className="flex flex-row justify-between w-full mt-2">
                <p className="text-[14px] font-medium text-[#817979]">
                    Preparation time
                </p>
                <p className="text-[#68B42E] text-[14px] font-normal">20 min</p>
            </div>
        </div>
    );
}
