import React from 'react'
const courseData = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and build modern responsive websites.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 2,
    name: "React.js for Beginners",
    description: "Build dynamic web applications using React and modern JavaScript.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    id: 3,
    name: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and user experience design.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
  },
  {
    id: 4,
    name: "Python Programming",
    description: "Master Python programming from basics to advanced concepts.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    id: 5,
    name: "Data Science Essentials",
    description: "Learn data analysis, visualization, and machine learning basics.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    id: 6,
    name: "Node.js Backend Development",
    description: "Build scalable backend APIs using Node.js and Express.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    id: 7,
    name: "Mobile App Development",
    description: "Create cross-platform mobile apps using modern frameworks.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },
  {
    id: 8,
    name: "Cybersecurity Basics",
    description: "Understand the fundamentals of protecting systems and networks.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: 9,
    name: "Digital Marketing Mastery",
    description: "Learn SEO, social media marketing, and online advertising.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec"
  },
  {
    id: 10,
    name: "Machine Learning Introduction",
    description: "Explore machine learning algorithms and practical AI projects.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1526378722484-cc5c5100a3e1"
  }
];


const PopularCourse = () => {
  return (
    <div className='max-w-7xl h-6 mx-auto'>
        <h3 className='text-red-500 font-extrabold text-3xl'>Most Popular Course This Month</h3>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 my-7'>
            {
                courseData.map(item=>{
                    return (
                        <div key={item.id} className='h-[380px] rounded-2xl overflow-hidden border-2 border-gray-300'>
                            <div className='w-full h-[176px]'>
                                <img src={item.image} alt="" className='w-full h-full' />
                            </div>
                            <div className='w-full h-[calc(100%-176px)] p-3'>
                                <h4 className='text-2xl'>{item.name}</h4>
                                <p className='line-clamp-3 my-1'>{item.description}</p>
                                <p>{item.rating}</p>
                                <div className='flex justify-end border-0'>
                                    <button className='px-2 py-2 bg-blue-600 text-white rounded-md outline-0'>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PopularCourse