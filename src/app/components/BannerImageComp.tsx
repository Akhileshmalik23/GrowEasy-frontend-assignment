import React, { useState } from 'react';
import EditBannerTemplateBs from './EditBannerTemplateBs';

interface BannerProps {
  id: number;
  title: string;
  description: string;
  button: string;
  image: string;
  color: string;
  onEdit: (id: number, updatedBanner: any) => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, button, image, color, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedBanner: any) => {
    onEdit(id, updatedBanner);
    setIsEditing(false);
  };

  return (
    <>
      <div
        className='w-auto h-80  bg-cover relative bg-center rounded-lg flex flex-col '
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2 className='text-4xl   font-bold mt-6 ml-8' style={{ color }}>{title}</h2>
        <p className="mt-3 ml-5 text-gray-700">{description}</p>

        <button className="mt-40 ml-6 w-40 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-black hover:border-red-400 hover:border-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          {button}
        </button>

        <button
          onClick={handleEditClick}
          className="absolute top-2 right-2 bg-gray-300 text-gray-800 p-2 rounded-full shadow"
        >
          ✏️
        </button>

        {isEditing && (
          <EditBannerTemplateBs
            banner={{ title, description, button, image, color }}
            onSave={handleSave}
            onClose={() => setIsEditing(false)}
          />
        )}
      </div>
    </>
  );
};

export default BannerImageComp;
