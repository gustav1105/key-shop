import React from 'react';

interface FeaturedProductProps {
    imageSrc: string[];
    title: string;
    description: string;
}

const CardComp: React.FC<FeaturedProductProps> = ({ imageSrc, title, description }) => {
    // Determine the number of columns based on the number of images
    const numColumns = imageSrc.length >= 3 ? 3 : imageSrc.length;

    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <div
                className={`grid grid-cols-${numColumns} gap-4 mb-4`}
                style={{ gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))` }}
            >
                {imageSrc.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index}`}
                        className="w-full h-48 object-cover rounded-md"
                        style={{ maxHeight: '200px' }} // Adjust the maxHeight as needed
                    />
                ))}
            </div>
            <p className="text-gray-400 mb-4">{description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View</button>
        </div>
    );
};

export default CardComp;
