import React, { useState } from 'react';

interface FeaturedProductCompProps {
    imageSrc: string;
    title: string;
    description: string;
    images: { src: string, color: string }[];
    additionalImageSrc: string;
}

const FeaturedProductComp: React.FC<FeaturedProductCompProps> = ({ imageSrc, title, description, images, additionalImageSrc }) => {
    const [hoveredColor, setHoveredColor] = useState<string | null>(null);

    return (
        <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden">
            <div className="flex flex-grow relative">
                <div className="relative flex-shrink-0 w-2/3 pr-6 overflow-hidden">
                    {/* Hovered image overlay */}
                    {hoveredColor && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                            <img
                                src={images.find(img => img.color === hoveredColor)?.src}
                                alt={`color ${hoveredColor}`}
                                className="w-full h-full object-cover rounded-md border-2 border-gray-300"
                            />
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 relative z-0">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="relative w-full h-48 overflow-hidden group"
                                onMouseEnter={() => setHoveredColor(img.color)}
                                onMouseLeave={() => setHoveredColor(null)}
                            >
                                <img
                                    src={img.src}
                                    alt={`color ${img.color}`}
                                    className={`w-full h-full object-cover rounded-md border-2 border-gray-300 transition-transform duration-300 ease-in-out ${hoveredColor === img.color ? 'opacity-0' : 'opacity-100'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProductComp;
