import React, { useState } from 'react';

export default function CustomCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
        <button
            onClick={() => setChecked(!checked)}
            className="w-6 h-6 flex items-center justify-center rounded-md border-2 transition-colors"
            style={{
                borderColor: checked ? '#FF7A00' : '#FF7A00',
                backgroundColor: checked ? '#FFF8F0' : 'transparent',
            }}
        >
            {checked && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FF7A00"
                    strokeWidth="3"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            )}
        </button>
    );
}
