
import React, { useState } from 'react';



interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [formData, setFormData] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="absolute ml-96 w-72  z-10 bg-red-50 p-5 shadow-lg rounded-lg"

      style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/pastel-orange-watercolour-background_199112-162.jpg?)` }}
    >
      <div className="mb-4">
        <label className="block text-black  font-medium font-grandstander">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black  font-medium font-grandstander">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-medium  font-grandstander">Button</label>
        <input
          name="button"
          value={formData.button}
          onChange={handleChange}
          placeholder="button"
          className="w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-medium font-grandstander ">Image URL</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-medium font-grandstander">color</label>
        <input
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="color"
          className="w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={handleSubmit} className="hover:bg-green-400 border-green-600 border-2 text-black text-lg py-1 px-4 rounded-3xl font-kalam transition duration-500 hover:text-white ease-in-out transform hover:scale-105">
          Save
        </button>
        <button onClick={onClose} className="hover:bg-red-400 border-red-600 border-2 text-black py-2 px-4 rounded-3xl hover:text-white font-kalam transition duration-300 ease-in-out transform hover:scale-105">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
