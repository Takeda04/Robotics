import { PlayIcon } from '@/assets/icons/icons';
import React from 'react';

export const VideoCard = () => {
    return (
        <div
            className='w-[220px] h-[310px] flex items-center justify-center bg-gray-500 m-2' // Added margin
            style={{
                boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                borderRadius: "12px",
            }}
        >
            <PlayIcon />
        </div>
    );
}
