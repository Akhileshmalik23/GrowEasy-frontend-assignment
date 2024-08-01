'use client';

import { useState } from 'react';
import BannerImageComp from './components/BannerImageComp';
import adBanners from '../data/adBanners.json';

const Home: React.FC = () => {
  const [banners, setBanners] = useState(adBanners);

  const handleEdit = (id: number, updatedBanner: any) => {
    const updatedBanners = banners.map(banner => banner.id === id ? { ...banner, ...updatedBanner } : banner);
    setBanners(updatedBanners);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 gap-4  p-4 mt-6 " >
      {banners.map(banner => (
        <BannerImageComp key={banner.id} {...banner} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default Home;
