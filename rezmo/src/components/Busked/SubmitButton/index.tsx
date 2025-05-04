import React from 'react';

export default function SubmitButton() {
    return (
        <div className="w-full px-3 fixed bottom-0 left-0 py-5 z-20">
            <button className="text-white text-[20px] p-5 w-full font-semibold flex flex-row justify-between bg-[#FF7717] rounded-[20px]">
                Send for preparation <span>12 azn</span>
            </button>
        </div>
    );
}
