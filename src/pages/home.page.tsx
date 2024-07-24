import React from 'react';
import sample6 from '../assets/samples/eury-escudero-UI81O_57kxk-unsplash.jpg';
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
import HeroSection from "../components/hero.comp";
import FooterComp from "../components/footer.comp";
import FeatureProd3Comp from "../components/feature-prod-3.comp";


const cardData = [
    { title: 'Water Dye', imageSrc: [waterDye, waterDye2], specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Big Bear', imageSrc: [bigBear, bigBear2], specs: 'PBT plastic with MOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Blue Samurai', imageSrc: [blueSamarai,blueSamarai2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Gummy Bears', imageSrc: [gummyBears, gummyBears2], specs: 'PBT plastic with XDA profile for MX switches (Dye-Sublimation)' },
    { title: 'Night Sakura', imageSrc: [nightSakura, nightSakura2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Snow Mountain', imageSrc: [snowMountain, snowMountain2], specs: 'PBT plastic with KOA profile for MX switches (Dye-Sublimation)' },
    { title: 'Lucky 65 ☘', imageSrc:[dblue, black], specs: 'CNC aluminium chassis. Hot swappable switch plate with north facing RGB. Battery capacity of 3750mAh. Foam, sound isolation gasket mounts. 2.4Ghz, Bluetooth and usb-C connectivity. Comes with stabelisers' }
];

const HomePage: React.FC = () => {
    const images = [sample6];
    const title = process.env.REACT_APP_STORE_TITLE ?? 'title';
    const description = process.env.REACT_APP_STORE_DESCRIPTION ?? 'description';

    return (
        <div className="min-h-screen bg-black text-white">

            <div className={`pt-0`}>
                <HeroSection
                    images={images}
                    title={title}
                    description={description}
                />
            </div>
            <main className="py-8">
                <FeatureProd3Comp/>
                <section className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                    <p className="text-lg leading-relaxed">
                        Helping you create the perfect keyboard. We offer a comprehensive service.
                        Our technicians test and lube each switch before dispatching your keyboard.
                        You can request your order in kit form or pre-assembled.

                        Our ordering system is online and we ship anywhere in south africa. If
                        you would like international shipping or have any other query check ouy the
                        the top right menu bar item for help. We are happy to hear from you.

                        Find the menu at the left and and explore our products where you can view the
                        entire range and find out more about specific components.
                    </p>
                </section>
            </main>

            <FooterComp/>
        </div>
    );
};

export default HomePage;
