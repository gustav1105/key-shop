import React, { useState, useEffect } from 'react';
import white from '../assets/parts/white.webp';
import black from '../assets/parts/black.webp';
import lblue from '../assets/parts/lblue.jpg';
import dblue from '../assets/parts/dblue.jpeg';
import red from '../assets/parts/red.jpg.webp';
import purple from '../assets/parts/purple.jpg';

const images = [white, black, lblue, dblue, red, purple];

const getThreeUniqueRandomIndices = () => {
    let indices: number[] = [];
    while (indices.length < 3) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
};

const cardData = [
    {
        title: 'Ultimate Mechanical Keyboard',
        description: 'Experience unparalleled typing comfort and speed with the Ultimate Mechanical Keyboard. Customizable RGB backlighting, durable switches, and a robust 5000mAh battery ensure long-lasting performance.',
        specs: [
            'Customizable RGB backlighting',
            'Durable mechanical switches',
            '5000mAh battery',
            'Ergonomic design'
        ]
    },
    {
        title: 'Gaming Keyboard',
        description: 'Adaptability and customization are at the heart of the Gaming Keyboard. Featuring customizable key layouts, switch types, and RGB lighting, this keyboard is perfect for every gaming setup.',
        specs: [
            'Customizable key layouts',
            'Switch type options',
            'RGB lighting',
            'Anti-ghosting technology'
        ]
    },
    {
        title: 'Compact Travel Keyboard',
        description: 'The Compact Travel Keyboard is 60% the size of a standard keyboard, featuring a 5000mAh battery for extended use. Its lightweight design and wireless connectivity make it perfect for on-the-go typing.',
        specs: [
            '60% compact size',
            '5000mAh battery',
            'Wireless connectivity',
            'Lightweight design'
        ]
    }
];

const FeaturedFeature: React.FC = () => {
    const [indices, setIndices] = useState(getThreeUniqueRandomIndices());

    useEffect(() => {
        const updateImages = () => {
            setIndices(getThreeUniqueRandomIndices());
        };

        const interval = setInterval(updateImages, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container mx-auto px-4 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {indices.map((index, i) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={images[index]}
                            alt={`Keyboard ${i + 1}`}
                            className="w-full h-48 object-cover rounded-t-md mb-4 cursor-pointer"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-white">{cardData[i].title}</h3>
                        <p className="text-gray-400 mb-4">{cardData[i].description}</p>
                        <ul className="text-gray-400 mb-4">
                            {cardData[i].specs.map((spec, index) => (
                                <li key={index} className="list-disc pl-5">{spec}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedFeature;
