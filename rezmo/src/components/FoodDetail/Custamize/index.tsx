import React from 'react';
import CustomCheckbox from './CustomCheckbox';

export default function CustomizeSection() {
    return (
        <div className="pt-2 px-5">
            <h3 className="font-medium">Customize your dish</h3>
            <p className="text-gray-500 text-xs">
                Select between 0 and 3 options
            </p>

            <div className="mt-3 pb-5 border-b border-[#F0F0F0] space-y-3">
                <div className="flex items-center space-x-2">
                    <CustomCheckbox />

                    <label
                        htmlFor="salad"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Salad
                    </label>
                </div>

                <div className="flex items-center space-x-2">
                    <CustomCheckbox />

                    <label
                        htmlFor="chicken"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Chicken
                    </label>
                </div>

                <div className="flex items-center space-x-2">
                    <CustomCheckbox />
                    <label
                        htmlFor="dressing"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Extra dressing
                    </label>
                </div>
            </div>
        </div>
    );
}
