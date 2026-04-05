import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profile from '../../../assets/images/profile.jpg';
import { toast } from 'react-toastify';
import { getBannerById, updateBanner } from '../../../services/BannerService';

const EditBanner = () => {
  const navigate=useNavigate()
  const {id} =useParams();
  const [previewImage,setPreviewImage]=useState(null);
  const [bannerData,setBannerData]=useState({title:'',status:'active',image: ''})
  
  const fetchBanner= async ()=>{
    try {
      const banner=await getBannerById(id)
      if(banner.success){
        setBannerData(banner.data)
        setPreviewImage(banner.image)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchBanner()
  },[id])

  const handleChageImage=(e)=>{
    e.preventDefault();
    const file=e.target.files[0];
    if(file){
      const image = URL.createObjectURL(file);
      setPreviewImage(image)
    }
  }
  
  const handleUpdateBanner=async (e)=>{
    e.preventDefault();
    let data=new FormData(e.target);
    const res =await updateBanner(id,data);
    if(res.success){
      toast.success(res.message)
      navigate('/')
    }

  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Banner</h2>

      <form onSubmit={handleUpdateBanner} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={bannerData.title}
            onChange={(e)=>setBannerData({...bannerData,title:e.target.value})}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter banner title"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={bannerData.status}
            onChange={(e)=>setBannerData({...bannerData,status:e.target.value})}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <div className='w-37.5 h-37.5 relative overflow-hidden'>
            <input
              type="file"
              className="mt-1 w-full h-full absolute opacity-0"
              required
              onChange={handleChageImage}
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
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Update Banner
        </button>
      </form>
    </div>
  );
};

export default EditBanner;