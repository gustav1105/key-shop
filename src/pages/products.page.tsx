import React from 'react';
import CardComp from "../components/card.comp";

import waterDye from '../assets/parts/water-dye.webp';
import bigBear from '../assets/parts/big-bear.webp';
import blueSamarai from '../assets/parts/blue-samarai.webp';
import gummyBears from '../assets/parts/gummy-bears.webp';
import nightSakura from '../assets/parts/night-sakura.jpeg';
import snowMountain from '../assets/parts/snow-maintain.webp';
import nightSakura2 from '../assets/parts/night-sakura-template.webp';
import waterDye2 from '../assets/parts/water-dye-template.webp';
import bigBear2 from '../assets/parts/big-bear-template.webp';
import blueSamarai2 from '../assets/parts/blue-samurai-template.webp';
import gummyBears2 from '../assets/parts/gummy-bears-template.webp';
import snowMountain2 from '../assets/parts/snow-mountain-template.webp';
import white from '../assets/parts/white.webp';
import black from '../assets/parts/black.webp';
import lblue from '../assets/parts/lblue.jpg';
import dblue from '../assets/parts/dblue.jpeg';
import red from '../assets/parts/red.jpg.webp';
import purple from '../assets/parts/purple.jpg';
import useFetch from "../hooks/use-featch";
import productService from "../services/product.service";

const cardData = [
    { title: 'Water Dye', imageSrc: [waterDye, waterDye2], specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Big Bear', imageSrc: [bigBear, bigBear2], specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Blue Samurai', imageSrc: [blueSamarai,blueSamarai2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Gummy Bears', imageSrc: [gummyBears, gummyBears2], specs: 'PBT plastic with XDA profile for MX switches (Dye-Sublimation)' },
    { title: 'Night Sakura', imageSrc: [nightSakura, nightSakura2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Snow Mountain', imageSrc: [snowMountain, snowMountain2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Weikav ☘ Lucky 65', imageSrc:[dblue, black], specs: 'CNC aluminium chassis. Hot swappable switch mounts with north facing RGB. Battery capacity of 3750mAh. Foam, sound isolation gasket mounts. 2.4Ghz, Bluetooth and usb-C connectivity. Comes with stabelisers' }
];

const ProductPage: React.FC = () => {
    const { data: products, loading, error } = useFetch(productService.getProducts);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(products);

    return (
        <section className="container mx-auto px-4 py-8 bg-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                    <CardComp
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.specs}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductPage;
