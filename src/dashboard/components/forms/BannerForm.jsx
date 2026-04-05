import React, { useState } from 'react';
import axios from 'axios';
import profile from '../../../assets/images/profile.jpg'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createBanner } from '../../../services/BannerService';

const BannerForm = () => {
  const [previewImage,setPriviewImage]=useState(profile)
  const navigate=useNavigate();

  const handleCreateBanner= async (e)=>{
    e.preventDefault();
    let data = new FormData(e.target);
    const res=await createBanner(data)
    if(res.success){
      toast.success(res.message);
      navigate('/');
    }
  }

  const handleChangeImage=(e)=>{
    e.preventDefault()
    const file =e.target.files[0];

    if(file){
      let image=URL.createObjectURL(file)
      setPriviewImage(image)
    }

  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Banner</h2>

      <form onSubmit={handleCreateBanner} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter banner title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <label className="block text-sm font-medium text-gray-700">Image</label>
        <div className='w-37.5 h-37.5 relative overflow-hidden'>
          <input
            type="file"
            className="mt-1 w-full h-full absolute opacity-0"
            required
            onChange={handleChangeImage}
          />

          {previewImage && (
            <div>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BannerForm;