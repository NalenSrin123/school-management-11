import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBanner, GetBanner } from '../../../services/BannerService';

const List_Banner = () => {
  const navigate=useNavigate()
   const location = useLocation();
  const [banner,setBanner]=useState([]);
  useEffect(()=>{
    const fetchBanner= async ()=>{
      let banner=await GetBanner();
      setBanner(banner);
    }
    fetchBanner();
  },[location.key])
  const handleDelete = async (id) => {
    let result = await deleteBanner(id);
    if (result) {
      toast.success(result.message);
      setBanner((prev) => prev.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Banner List</h2>
        <button className='px-4 py-2 rounded-md bg-blue-500 text-white cursor-pointer' onClick={()=> navigate('/createBanner')}>Add New Banner</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Created By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {banner.map((banner) => (
              <tr key={banner.id} className="hover:bg-blue-50">
                <td className="px-6 py-4 whitespace-nowrap">{banner.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={banner.image} alt={banner.title} className="w-20 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{banner.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    banner.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {banner.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{banner.created_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{banner.creator.name}</td>
                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => navigate(`/edit-banner/${banner.id}`)} >Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(banner.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List_Banner;