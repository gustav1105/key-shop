import React from 'react';

import waterDye from '../assets/parts/water-dye.webp';
import bigBear from '../assets/parts/big-bear.webp';
import blueSamarai from '../assets/parts/blue-samarai.webp';
import gummyBears from '../assets/parts/gummy-bears.webp';
import nightSakura from '../assets/parts/night-sakura.jpeg';
import snowMountain from '../assets/parts/snow-maintain.webp';

const keysData = [
    { title: 'Water Dye', imageSrc: waterDye, specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Big Bear', imageSrc: bigBear, specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Blue Samurai', imageSrc: blueSamarai, specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Gummy Bears', imageSrc: gummyBears, specs: 'PBT plastic with XDA profile for MX switches (Dye-Sublimation)' },
    { title: 'Night Sakura', imageSrc: nightSakura, specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Snow Mountain', imageSrc: snowMountain, specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
];

const KeyCapsComp: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden">
            <div className="mb-8">
                <div className="relative">
                    <h1 className="text-4xl font-bold text-gray-900 pb-2">Key Caps</h1>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-800"></div>
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {keysData.map((key, index) => (
                        <div key={index}
                             className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg flex flex-col items-center">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{key.title}</h2>
                            <img
                                src={key.imageSrc}
                                alt={key.title}
                                className="w-full h-32 object-cover mb-4 rounded-md border-2 border-gray-300"
                            />
                            <p className="text-base font-medium text-gray-700 leading-relaxed">{key.specs}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyCapsComp;
