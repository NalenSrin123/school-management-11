import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import { LocationEdit } from 'lucide-react';
import Footer from '../../app/Footer';
import ED4 from '../pages/image/Etec_Donatation4.png';
import ED1 from '../pages/image/Etec_Donatation1.png';
import ED2 from '../pages/image/Etec_Donatation2.png';
import ED3 from '../pages/image/Etec_Donatation3.png';
import ED5 from '../pages/image/Etec_Donatation5.png';

const cards = [
  {
    title: 'Food Donation',
    location: 'Etec Center',
     images: [ED4,ED1, ED2, ED3,ED5],
  

  },
  {
    title: 'Food Donation',
    location: 'Etec Center',
     images: [ED4,ED1, ED2, ED3,ED5],
  

  },
  {
    title: 'Food Donation',
    location: 'Etec Center',
     images: [ED4,ED1, ED2, ED3,ED5],
  

  },
 
];

const DonatePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="w-full h-auto">
      <Navbar />

      <div className="px-6 lg:px-16 w-full h-auto mt-40 mb-10">
        <div className="max-w-7xl mx-auto flex gap-6 flex-wrap justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[220px] md:w-[240px] lg:w-[260px] rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="w-full h-[160px]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={card.images[0]}
                  alt={card.title}
                />
              </div>
              <div className="px-3 py-3">
                <p className="font-semibold text-sm">{card.title}</p>
                <p className="flex items-center text-[12px] mt-1 text-gray-500">
                  <LocationEdit className="w-3 h-3 mr-1" />
                  {card.location}
                </p>
                <button
                  onClick={() => setSelectedCard(card)}
                  className="w-full py-2 mt-3 rounded-md text-white bg-blue-500 text-[13px] cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {selectedCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-2xl p-6 relative max-h-[80vh] overflow-y-auto">
                            
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
              <p className="text-gray-600 mb-4">{selectedCard.location}</p>

              <div className="grid grid-cols-2 gap-4">
                {selectedCard.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedCard.title} ${i + 2}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Here you can add more details about this donation event. If the content is long,
                the modal will scroll instead of overflowing.
              </p>
            </div>
          </div>
        )}

    </div>
  );
};

export default DonatePage;