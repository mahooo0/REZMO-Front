import React from 'react';
import CustomCheckbox from '../Custamize/CustomCheckbox';

export default function ExtraSection() {
    return (
        <div className="pt-2 mt-5 px-5 mb-[80px]">
            <h3 className="font-medium">Customize your dish</h3>
            <p className="text-gray-500 text-xs">
                Select between 0 and 3 options
            </p>

            <div className="mt-3 space-y-3">
                <div className="flex items-center space-x-2">
                    <CustomCheckbox />
                    <div className="flex items-center justify-between w-full">
                        <label
                            htmlFor="salad"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Salad
                        </label>
                        <p>5,00 azn</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <CustomCheckbox />

                    <div className="flex items-center justify-between w-full">
                        <label
                            htmlFor="salad"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Salad
                        </label>
                        <p>5,00 azn</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <CustomCheckbox />
                    <div className="flex items-center justify-between w-full">
                        <label
                            htmlFor="salad"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Salad
                        </label>
                        <p>5,00 azn</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
