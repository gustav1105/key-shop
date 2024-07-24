import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
    images: string[];
    title: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ images, title, description }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const timeout = process.env.REACT_APP_SHUFFLE_TIMEOUT ?? 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => {
                const currentIndex = images.indexOf(prev);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, Number(timeout)); // 5 seconds

        return () => clearInterval(interval);
    }, [images, timeout]);

    return (
        <section className="relative h-[400px] mb-12 z-10">
            <div
                className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${currentImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end p-8">
                    <div className="text-right">
                        <h2 className="text-4xl font-bold mb-4">{title}</h2>
                        <p className="text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
