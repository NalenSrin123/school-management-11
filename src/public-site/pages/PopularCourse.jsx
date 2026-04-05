import React, { useState, useEffect } from 'react';

const popularcourse = () => {
    // 1. Setup state for courses and loading
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. Fetch data when component mounts
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://school-management-11-main-oxrub0.laravel.cloud/api/courses');
                const data = await response.json();
                
                // Assuming the API returns an array or an object with a data property
                // Adjust based on the actual JSON structure of your API
                setCourses(data.data || data); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading awesome courses...</div>;
    }

    return (
        <div className='max-w-7xl h-auto p-6 lg:p-0 mx-auto'>
            <h3 className='font-extrabold text-3xl text-red-500'>Most Popular Course This Month</h3>
            
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 my-7'>
                {courses.map(item => (
                    <div key={item.id} className='h-[380px] rounded-2xl overflow-hidden border-2 border-gray-300 flex flex-col'>
                        <div className='w-full h-[176px]'>
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className='w-full h-full object-cover' 
                            />
                        </div>
                        
                        <div className='w-full flex-1 p-3 flex flex-col justify-between'>
                            <div>
                                <h4 className='text-2xl font-bold line-clamp-1'>{item.name}</h4>
                                <p className='line-clamp-3 my-1 text-gray-600 text-sm'>{item.description}</p>
                                <p className='text-yellow-600 font-semibold'>⭐ {item.rating}</p>
                            </div>
                            
                            <div className='flex justify-end'>
                                <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md'>
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default popularcourse;

